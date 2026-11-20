
import { useApp } from "../context/useApp";

export default function Profile() {
  const { content } = useApp();
  const { profile } = content;

  return (
    <section
      id="profile"
      className="max-w-6xl mx-auto px-6 pt-12"
      aria-labelledby="profile-title"
    >
      <h2
        id="profile-title"
        className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-10"
      >
        {profile.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-[#BAB2E7] dark:border-[#BAB2E7]/40">
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-2xl font-medium text-[#4338CA] dark:text-[#B7AAFF]">
            {profile.subTitle}
          </h3>

          <div className="space-y-4 text-sm sm:text-base">
            {profile.details.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-12 gap-2"
              >
                <span className="col-span-5 font-semibold text-[#000000] dark:text-white">
                  {item.label}
                </span>

                <span className="col-span-7 text-[#000000] dark:text-white whitespace-pre-line">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 space-y-6">
          <h3 className="text-2xl font-medium text-[#4338CA] dark:text-[#B7AAFF]">
            {profile.aboutTitle}
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-[#6B7280] dark:text-white leading-relaxed">
            {profile.aboutParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
