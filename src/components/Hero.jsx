
import { useApp } from "../context/useApp";

export default function Hero() {
  const { content } = useApp();
  const { hero } = content;

  return (
    <section
      className="max-w-6xl mx-auto px-6 py-10 md:py-16"
      aria-labelledby="hero-title"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Sol Metin Alanı */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-20 h-[1px] bg-[#3730A3] dark:bg-[#BAB2E7]" />

            <span className="text-[#4338CA] dark:text-[#B7AAFF] font-medium text-lg">
              {hero.name}
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-[800] text-[#1F2937] dark:text-[#AEBCCF] leading-tight whitespace-pre-line"
          >
            {hero.title}
          </h1>

          <p className="text-[#6B7280] dark:text-[#FFFFFF] text-base sm:text-lg leading-relaxed max-w-xl">
            {hero.description}
          </p>

          {/* Aksiyon Butonları */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#footer"
              className="px-7 py-3 rounded-md bg-[#3730A3] dark:bg-[#E1E1FF] text-white dark:text-[#000000] font-medium hover:opacity-90 transition-opacity"
            >
              {hero.hireMe}
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/doaslan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="px-5 py-3 rounded-md border border-[#3730A3] dark:border-[#E1E1FF] bg-white dark:bg-[#383838] text-[#3730A3] dark:text-[#E1E1FF] font-medium flex items-center gap-2.5 hover:bg-gray-50 dark:hover:bg-[#454545] transition-colors"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-current"
                viewBox="0 0 28 28"
              >
                <path d="M14 2C7.37 2 2 7.37 2 14c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0026 14c0-6.63-5.37-12-12-12z" />
              </svg>

              <span>{hero.github}</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/doaslan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="px-5 py-3 rounded-md border border-[#3730A3] dark:border-[#E1E1FF] bg-white dark:bg-[#383838] text-[#3730A3] dark:text-[#E1E1FF] font-medium flex items-center gap-2.5 hover:bg-gray-50 dark:hover:bg-[#454545] transition-colors"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>

              <span>{hero.linkedin}</span>
            </a>
          </div>
        </div>

        {/* Sağ Görsel Alanı */}
        <div className="relative w-full max-w-[440px] h-[380px] rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center bg-gray-100 dark:bg-[#252128]">
          <img
            src="/hero.jpeg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-65"
          />

          <img
            src="/hero.jpeg"
            alt={hero.name}
            className="relative z-10 w-[86%] h-full object-cover object-[50%_48%] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
