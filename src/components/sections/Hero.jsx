import profile from "../../assets/hero.jpg";
import { links } from "../../data/links";

export default function Hero() {
  return (
    <section
      id="home"
      className="mx-auto flex max-w-6xl flex-col-reverse items-center justify-between gap-12 px-6 py-20 md:flex-row"
    >
      <div>
        <p className="text-lg text-sky-700 dark:text-sky-400">Hello, I'm</p>
        <h1 className="mt-2 text-5xl font-bold leading-tight md:text-6xl">
          Himanshu Pandey
        </h1>
        <h2 className="mt-2 text-2xl font-medium text-slate-600 dark:text-slate-400">
          MERN Stack Developer
        </h2>
        <p className="mt-5 max-w-lg text-slate-600 dark:text-slate-400">
          I build full-stack web apps with authentication, REST APIs and AI
          integration.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-sky-700 px-6 py-3 font-bold text-white hover:bg-sky-800 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-slate-300 px-6 py-3 font-medium hover:border-sky-700 dark:border-slate-700 dark:hover:border-sky-400"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-6 flex gap-5 text-sm text-slate-600 dark:text-slate-400">
          <a href={links.github} target="_blank" rel="noreferrer" className="hover:text-sky-700 dark:hover:text-sky-400">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="hover:text-sky-700 dark:hover:text-sky-400">LinkedIn</a>
          <a href={links.email} className="hover:text-sky-700 dark:hover:text-sky-400">Email: 1himanshupandey1@gmail.com</a>
        </div>
      </div>

      <img
        src={profile}
        alt="Himanshu Pandey"
        className="h-64 w-64 rounded-full border-4 border-sky-700 object-cover md:h-72 md:w-72 dark:border-sky-400"
      />
    </section>
  );
}