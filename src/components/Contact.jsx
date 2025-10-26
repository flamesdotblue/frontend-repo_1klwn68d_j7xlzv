import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Let’s build something great</h2>
        <p className="mt-3 text-slate-300">
          Open to freelance, collaborations, and full-time roles.
        </p>
      </div>

      <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-center ring-1 ring-white/10">
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
        >
          <Mail className="h-4 w-4" />
          hello@example.com
        </a>

        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
          >
            <Github className="h-4 w-4" /> Github
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
