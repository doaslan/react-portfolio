
import { useApp } from "../context/useApp";

export default function Skills() {
  const { content } = useApp();
  const { skills } = content;

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 pt-12"
      aria-labelledby="skills-title"
    >
      <h2
        id="skills-title"
        className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10"
      >
        {skills.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-14 border-b border-[#BAB2E7] dark:border-[#BAB2E7]/40">
        {skills.items.map((skill) => (
          <div key={skill.name} className="space-y-4">
            <h3 className="text-2xl font-medium text-[#4338CA] dark:text-[#B7AAFF]">
              {skill.name}
            </h3>

            <p className="text-sm text-[#6B7280] dark:text-white leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
