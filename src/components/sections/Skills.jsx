import SectionHeading from "../ui/SectionHeading";
import SkillBadge from "../ui/SkillBadge";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading title="Skills" />
      <div className="grid gap-8 md:grid-cols-2">
        {skills.map(({ group, items }) => (
          <div key={group}>
            <h3 className="mb-3 font-medium text-sky-700 dark:text-sky-400">{group}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((name) => (
                <SkillBadge key={name} name={name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}