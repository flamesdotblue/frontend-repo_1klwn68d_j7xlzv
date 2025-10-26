import React from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'A sleek e-commerce experience with animated product galleries and blazing-fast checkout.',
    tags: ['React', 'Tailwind', 'Stripe'],
    link: '#',
  },
  {
    title: 'Portfolio Playground',
    desc: 'Interactive 3D hero, scroll-based motion, and modular sections built for storytelling.',
    tags: ['Spline', 'Framer Motion', 'Vite'],
    link: '#',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Data-rich analytics with accessible components, theming, and delightful micro-interactions.',
    tags: ['TypeScript', 'React Query', 'Charts'],
    link: '#',
  },
];

const Card = ({ title, desc, tags, link }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[3%] p-6 transition">
    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-slate-300">{desc}</p>
      </div>
      <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
        <Globe className="h-5 w-5 text-sky-300" />
      </div>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span
          key={t}
          className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-slate-200 ring-1 ring-white/10"
        >
          {t}
        </span>
      ))}
    </div>
    <a
      href={link}
      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition hover:text-sky-200"
    >
      Visit project
      <ArrowRight className="h-4 w-4" />
    </a>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 text-slate-300">A mix of client work, experiments, and product design.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
