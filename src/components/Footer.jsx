
import { useApp } from "../context/useApp";

export default function Footer() {
  const { content } = useApp();
  const { footer } = content;

  return (
    <footer
      id="footer"
      className="bg-[#F9F9F9] dark:bg-[#141414] py-16 mt-12 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1F2937] dark:text-[#AEBCCF] leading-snug whitespace-pre-line">
          {footer.heading}
        </h2>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="flex items-center gap-2 font-medium">
            <span aria-hidden="true">👉</span>

            <a
              href={`mailto:${footer.email}`}
              className="text-[#AF0C48] dark:text-[#BAB2E7] underline underline-offset-4"
            >
              {footer.email}
            </a>
          </div>

          <nav
            aria-label="Social media links"
            className="flex flex-wrap items-center gap-6 text-sm sm:text-base font-medium"
          >
            {footer.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${link.color} hover:underline`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
