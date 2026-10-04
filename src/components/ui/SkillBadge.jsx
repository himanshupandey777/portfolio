export default function SkillBadge({ name }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm dark:border-slate-800 dark:bg-slate-900">
      {name}
    </span>
  );
}