'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Rotating 3D node-mesh — a visual nod to the Network & Security track.
 * Points distributed on a sphere, connected by lines to nearby neighbors.
 * Performance-guarded: capped DPR, paused when the tab is hidden, and
 * fully disabled when the user prefers reduced motion.
 */
export default function NetworkBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.z = 8.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // --- Build nodes on a fibonacci sphere ---
    const COUNT = 150;
    const RADIUS = 3.4;
    const nodes: THREE.Vector3[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < COUNT; i++) {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const jitter = 0.85 + Math.random() * 0.3;
      nodes.push(
        new THREE.Vector3(
          Math.cos(theta) * r * RADIUS * jitter,
          y * RADIUS * jitter,
          Math.sin(theta) * r * RADIUS * jitter
        )
      );
    }

    // --- Point cloud with circular sprites ---
    const sprite = (() => {
      const c = document.createElement('canvas');
      c.width = c.height = 64;
      const ctx = c.getContext('2d')!;
      const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      g.addColorStop(0, 'rgba(255,255,255,1)');
      g.addColorStop(0.3, 'rgba(0,255,204,0.9)');
      g.addColorStop(1, 'rgba(0,255,204,0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, 64, 64);
      const tex = new THREE.CanvasTexture(c);
      return tex;
    })();

    const ptGeo = new THREE.BufferGeometry().setFromPoints(nodes);
    const ptMat = new THREE.PointsMaterial({
      size: 0.32,
      map: sprite,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      opacity: 0.9,
    });
    const points = new THREE.Points(ptGeo, ptMat);

    // --- Connections between nearby nodes (static topology) ---
    const linePositions: number[] = [];
    const threshold = 1.55;
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < threshold) {
          linePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
        }
      }
    }
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00ffcc,
      transparent: true,
      opacity: 0.14,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeo, lineMat);

    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    group.rotation.x = 0.35;
    scene.add(group);

    // --- Pointer parallax ---
    const pointer = { x: 0, y: 0 };
    const targetRot = { x: 0.35, y: 0 };
    const onPointer = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onPointer);

    const start = performance.now();
    let raf = 0;
    let running = true;

    const render = () => {
      const t = (performance.now() - start) / 1000;
      targetRot.y = t * 0.06 + pointer.x * 0.4;
      targetRot.x = 0.35 + pointer.y * 0.2;
      group.rotation.y += (targetRot.y - group.rotation.y) * 0.05;
      group.rotation.x += (targetRot.x - group.rotation.x) * 0.05;
      renderer.render(scene, camera);
    };

    const animate = () => {
      if (!running) return;
      render();
      raf = requestAnimationFrame(animate);
    };

    if (prefersReduced) {
      render(); // single static frame
    } else {
      animate();
    }

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!prefersReduced && !running) {
        running = true;
        animate();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      ptGeo.dispose();
      ptMat.dispose();
      lineGeo.dispose();
      lineMat.dispose();
      sprite.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="fixed inset-0 -z-[2] pointer-events-none"
      style={{
        maskImage:
          'radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 70%)',
        WebkitMaskImage:
          'radial-gradient(ellipse 70% 60% at 50% 30%, #000 20%, transparent 70%)',
      }}
    />
  );
}
