'use client';

import {
  useRef,
  useEffect,
  useLayoutEffect,
  type ReactNode,
} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const useIsoLayout =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

let registered = false;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** vertical offset to animate from */
  y?: number;
  delay?: number;
  /** animate direct children individually with a stagger */
  stagger?: boolean;
  start?: string;
}

export default function Reveal({
  children,
  className,
  y = 28,
  delay = 0,
  stagger = false,
  start = 'top 85%',
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayout(() => {
    const el = ref.current;
    if (!el) return;

    if (!registered) {
      gsap.registerPlugin(ScrollTrigger);
      registered = true;
    }

    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const targets: Element[] = stagger
      ? Array.from(el.children)
      : [el];

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        delay,
        ease: 'power3.out',
        stagger: stagger ? 0.09 : 0,
        scrollTrigger: { trigger: el, start, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
