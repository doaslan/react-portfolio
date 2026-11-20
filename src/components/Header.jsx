
import { useApp } from "../context/useApp";

export default function Header() {
  const { darkMode, toggleTheme, toggleLanguage, content } = useApp();
  const { nav } = content;

  return (
    <header className="max-w-6xl mx-auto px-6 pt-6 pb-10">
      {/* Tema ve Dil Ayarları */}
      <div className="flex flex-wrap justify-end items-center gap-4 text-xs font-bold tracking-wider text-[#777777] dark:text-[#D9D9D9] mb-8">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={darkMode}
          className="flex items-center gap-2.5 cursor-pointer"
        >
          <div className="w-12 h-6 rounded-full bg-[#4731D3] dark:bg-[#3A3A3A] p-1 flex items-center transition-colors">
            <div
              className={`w-4 h-4 rounded-full bg-[#FFE86E] transition-transform duration-300 ${
                darkMode ? "translate-x-0" : "translate-x-6"
              }`}
            />
          </div>

          <span>{darkMode ? nav.lightMode : nav.darkMode}</span>
        </button>

        <span className="text-[#777777]" aria-hidden="true">
          |
        </span>

        <button
          type="button"
          onClick={toggleLanguage}
          aria-label={nav.langSwitch}
          className="hover:opacity-80 transition-opacity cursor-pointer flex items-center font-bold"
        >
          {(() => {
            const text = nav.langSwitch;

            if (text.includes("'")) {
              const [base, suffix] = text.split("'");

              return (
                <>
                  <span className="text-[#4731D3] dark:text-[#BAB2E7]">
                    {base}
                  </span>
                  <span className="text-[#777777] dark:text-[#D9D9D9]">
                    {`'${suffix}`}
                  </span>
                </>
              );
            } else {
              const words = text.split(" ");
              const lastWord = words.pop();
              const firstPart = words.join(" ");

              return (
                <>
                  <span className="text-[#777777] dark:text-[#D9D9D9] mr-1">
                    {firstPart}
                  </span>
                  <span className="text-[#4731D3] dark:text-[#BAB2E7]">
                    {lastWord}
                  </span>
                </>
              );
            }
          })()}
        </button>
      </div>

      {/* Ana Navigasyon */}
      <div className="flex flex-wrap justify-between items-center gap-6">
        <a
          href="#"
          aria-label="Homepage"
          className="w-14 h-14 shrink-0 rounded-full bg-[#EEEBFF] dark:bg-[#4731D3] flex items-center justify-center text-[#7B61FF] dark:text-[#8F88FF] font-bold text-xl rotate-[24deg] hover:rotate-0 transition-transform"
        >
          D
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center justify-end gap-4 sm:gap-8 md:gap-12"
        >
          <a
            href="#skills"
            className="text-[#6B7280] dark:text-[#6B7280] hover:text-[#4731D3] dark:hover:text-white font-medium transition-colors"
          >
            {nav.skills}
          </a>

          <a
            href="#projects"
            className="text-[#6B7280] dark:text-[#6B7280] hover:text-[#4731D3] dark:hover:text-white font-medium transition-colors"
          >
            {nav.projects}
          </a>

          <a
            href="#footer"
            className="px-6 py-2.5 rounded-md border border-[#3730A3] dark:border-[#E1E1FF] text-[#3730A3] dark:text-[#3730A3] bg-white dark:bg-white font-medium hover:bg-[#3730A3] hover:text-white transition-colors"
          >
            {nav.hireMe}
          </a>
        </nav>
      </div>
    </header>
  );
}
