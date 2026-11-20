
import { useApp } from "../context/useApp";

export default function Projects() {
  const { content } = useApp();
  const { projects } = content;

  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-14"
      aria-labelledby="projects-title"
    >
      <h2
        id="projects-title"
        className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10"
      >
        {projects.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {projects.items.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-md shadow-sm"
              />

              <h3 className="text-2xl font-medium text-[#4338CA] dark:text-[#CFCBFF]">
                {project.title}
              </h3>

              <p className="text-sm text-[#6B7280] dark:text-white leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1 text-xs font-medium rounded border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] bg-white dark:bg-[#383838]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-4 items-center pt-2 text-sm font-medium text-[#3730A3] dark:text-[#E1E1FF]">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    {projects.githubText}
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-80"
                  >
                    {projects.viewSiteText}
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
