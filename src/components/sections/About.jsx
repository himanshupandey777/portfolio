import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading title="About" />
      <div className="max-w-3xl space-y-4 text-slate-600 dark:text-slate-400">
      <p>
  I'm a MERN stack developer who likes building full-stack web apps end to
  end: React and Tailwind on the frontend, Node.js and Express on the
  backend, MongoDB for data, and JWT for authentication. I've also
  integrated the Gemini API to add AI features to a project.
  </p>
  <p>
    My main project is an AI interview prep platform. It turns a resume and a
    job description into a match score, practice questions and a day-wise
    preparation plan.I enjoy turning ideas into working products.
  </p>
  <p>
    Along with my BCA degree, I worked as a digital operations executive at Cafoli Lifecare,
    which taught me accuracy and clear communication. I'm now looking for
    developer roles and opportunities where I can build real features and keep
    growing.
  </p>
      </div>
    </section>
  );
}