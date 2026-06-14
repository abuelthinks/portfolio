'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';

const EMAIL = 'abuel.dev@gmail.com';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error('Please fill in every field.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('That email doesn’t look right.');
      return;
    }

    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);

    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      toast.success('Opening your mail app — thanks for reaching out!');
      setForm({ name: '', email: '', message: '' });
      setSending(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400">
            Name
          </label>
          <input
            value={form.name}
            onChange={update('name')}
            placeholder="Jane Doe"
            className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]/60 placeholder:text-slate-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            placeholder="jane@company.com"
            className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]/60 placeholder:text-slate-600"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-mono text-[0.7rem] uppercase tracking-widest text-slate-400">
          Message
        </label>
        <textarea
          value={form.message}
          onChange={update('message')}
          rows={5}
          placeholder="Tell me about your project, role, or idea…"
          className="bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)]/60 placeholder:text-slate-600 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={sending}
        className="btn btn-primary self-start font-mono uppercase tracking-widest text-sm disabled:opacity-70"
      >
        {sending ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <Send className="w-4 h-4" />
        )}
        {sending ? 'Sending' : 'Send message'}
      </button>
    </form>
  );
}
