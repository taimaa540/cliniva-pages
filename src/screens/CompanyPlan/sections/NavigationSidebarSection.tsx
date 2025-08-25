import { UserCircleIcon } from "lucide-react";

const stepperData = [
  {
    number: 1,
    isActive: true,
    title: "Fill in Company Details",
    items: [
      { text: "Company Overview", isActive: true },
      { text: "Contact Details", isActive: false },
      { text: "Legal Details", isActive: false },
    ],
    dots: 3,
  },
  {
    number: 2,
    isActive: false,
    title: "Fill in Complex Details",
    items: [
      { text: "Complex Overview", isActive: false },
      { text: "Contact Details", isActive: false },
      { text: "Working Schedule", isActive: false },
    ],
    dots: 3,
  },
  {
    number: 3,
    isActive: false,
    title: "Fill in Clinic Details",
    items: [
      { text: "Clinic Overview", isActive: false },
      { text: "Working Schedule", isActive: false },
    ],
    dots: 2,
  },
];

export const NavigationSidebarSection = (): JSX.Element => {
  return (
    <nav className="fixed top-0 w-[223px] bg-surface-default">
      <header className="flex flex-col items-start gap-2.5 px-2 py-[9px] mt-4 ml-5 w-full">
        <div className="flex items-center gap-[7px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 13V15H15V0H13V1C13 7.62742 7.62742 13 1 13H0Z"
              fill="#A5C8F2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 15H15V30H17.1322C18.0228 23.3156 23.3156 18.0228 30 17.1322V15Z"
              fill="#83DFDF"
            />
          </svg>
          <h1
            className={`text-xl leading-[22px] tracking-[0] whitespace-nowrap font-normal`}
          >
            Cliniva SYS
          </h1>
        </div>
      </header>

      <div className="flex flex-col w-[201px] items-start gap-4 ml-5 mt-[30px]">
        <div className="inline-flex items-center gap-2">
          <UserCircleIcon className="w-6 h-6 text-[#00B48D]" />
          <div className="[font-family:'Lato',Helvetica] font-semibold text-secondary-dark text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
            Account Setup
          </div>
        </div>

        <div className="flex items-start justify-center gap-2 w-full">
          <div className="flex flex-col w-[33px] h-[409px] items-start gap-[33px] px-[3px] py-2 bg-bg rounded-[109px]">
            {stepperData.map((step) => (
              <div
                key={step.number}
                className="flex flex-col w-[26px] items-center gap-4"
              >
                <div className="w-[26px] h-[26px] rotate-90">
                  <div className="w-7 h-[26px]">
                    <div
                      className={`w-[26px] h-[26px] rounded-[13px] ${
                        step.isActive ? "bg-app-primary" : "bg-white"
                      }`}
                    >
                      <div
                        className={`absolute w-1.5 top-[7px] left-2 -rotate-90 [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[18px] whitespace-nowrap ${
                          step.isActive
                            ? "text-white"
                            : "text-on-surface-primary"
                        }`}
                      >
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-[23px]">
                  {Array.from({ length: step.dots }).map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-2.5 h-2.5 rounded-[40px] rotate-90 ${
                        dotIndex === 0 && step.isActive
                          ? "bg-primary-dark"
                          : "bg-on-surface-tertiary"
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-40 h-[333px] items-center gap-6">
            {stepperData.map((step) => (
              <section
                key={step.number}
                className="flex flex-col w-40 items-start gap-[3px]"
              >
                <h3 className="mt-[-1.00px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-sm tracking-[0] leading-10">
                  {step.title}
                </h3>
                <div className="flex flex-col items-start gap-2 w-full">
                  {step.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex items-center justify-center gap-2.5 w-full"
                    >
                      <div
                        className={`flex-1 mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-xs tracking-[0] leading-6 ${
                          item.isActive
                            ? "text-primary-dark"
                            : "text-on-surface-secondary"
                        }`}
                      >
                        {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
