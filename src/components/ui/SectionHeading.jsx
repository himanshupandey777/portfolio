export default function SectionHeading({ title }) {
  return (
    <h2 className="mb-10 text-3xl font-bold">
      {title}
      <span className="text-sky-700 dark:text-sky-400">.</span>
    </h2>
  );
}