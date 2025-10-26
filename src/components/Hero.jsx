import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-slate-100">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-sky-300 ring-1 ring-white/10 backdrop-blur">
          Modern • Interactive • Playful
        </p>
        <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-6xl">
          Web Developer, Designer, and Motion Enthusiast
        </h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          I craft delightful web experiences that blend clean code, sleek design, and subtle animation. Explore my work and see how I bring ideas to life.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-medium text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
