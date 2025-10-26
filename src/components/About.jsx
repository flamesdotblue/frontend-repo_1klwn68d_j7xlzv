import React from 'react';
import { Code2, Palette, Film } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-fuchsia-500/20 ring-1 ring-white/10">
      <Icon className="h-6 w-6 text-sky-300" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-slate-300">{desc}</p>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">About Me</h2>
        <p className="mt-3 text-slate-300">
          I build fast, accessible websites with thoughtful motion and crisp visual design.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Item
          icon={Code2}
          title="Web Development"
          desc="Modern stacks, clean architecture, and performance-focused builds with React and Fast APIs."
        />
        <Item
          icon={Palette}
          title="UI/UX & Web Design"
          desc="Human-centered interfaces, component systems, and consistent typography that scale."
        />
        <Item
          icon={Film}
          title="Animation"
          desc="Micro-interactions and motion that guide attention without getting in the way."
        />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {[
          'React',
          'Next.js',
          'TypeScript',
          'Tailwind',
          'Node.js',
          'Framer Motion',
          'Figma',
          'GSAP',
        ].map((chip) => (
          <span
            key={chip}
            className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10"
          >
            {chip}
          </span>
        ))}
      </div>
    </section>
  );
};

export default About;
