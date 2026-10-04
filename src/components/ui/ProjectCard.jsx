export default function ProjectCard({ project }) {
  const { title, description, tech, live, github, image } = project;

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      {image && (
        <img src={image} alt={`${title} screenshot`} className="w-full border-b border-slate-200 dark:border-slate-800" />
      )}
      <div className="p-7">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 max-w-3xl leading-relaxed text-slate-600 dark:text-slate-400">
          {description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-400"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3">
          <a
            href={live}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-sky-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-sky-800 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-medium hover:border-sky-700 dark:border-slate-700 dark:hover:border-sky-400"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}