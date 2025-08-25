import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

const planData = [
  {
    title: "Company Plan",
    description:
      "Manage a network of multiple medical complexes, each with its own departments and clinics",
    features: [
      "Centralized admin and reporting",
      "Multi-location support",
      "Role hierarchy across all levels",
    ],
    titleColor: "text-[#5a5a5a]",
  },
  {
    title: "Complex Plan",
    description:
      "Manage a single complex that contains various departments and clinics under one roof",
    features: [
      "Localized administration",
      "Department-based control",
      "Full visibility over all clinics",
    ],
    titleColor: "text-on-surface-primary",
  },
  {
    title: "Single Clinic Plan",
    description:
      "A simplified setup for managing one independent clinic with no additional branches or departments",
    features: [
      "Minimal setup",
      "Quick onboarding",
      "Direct management by the clinic owner or manager",
    ],
    titleColor: "text-[#5a5a5a]",
  },
];

export const ChoosePlan = (): JSX.Element => {
  return (
    <div className="w-[1440px] h-[900px] bg-surface-default overflow-hidden">
        <img
            className="absolute top-[19px] left-[180px] "
            alt="Union"
            src="/Group.svg"
          />
          <img
            className="absolute top-[19px] right-[102px] "
            alt="Union"
            src="/Group2.svg"
          />
          <img
            className="absolute bottom-[19px] left-[180px] "
            alt="Union"
            src="/Group3.svg"
          />
          <img
            className="absolute bottom-[19px] right-[102px]"
            alt="Union"
            src="/Group4.svg"
          />
      {/* <div className="relative top-[-84px] left-[-111px] w-[1833px] h-[1110px]">
        <div className="absolute top-0 left-0 w-[1833px] h-[1110px]">
          <div className="w-[654px] h-[654px] top-0 left-0 rounded-[327px] absolute bg-secondary-light blur-[250px] opacity-40" />

          <div className="w-[692px] h-[669px] top-[441px] left-[1141px] rounded-[346px/334.5px] absolute bg-secondary-light blur-[250px] opacity-40" />

          <div className="absolute w-[110px] h-[110px] top-[107px] left-[197px] rotate-[-165deg]">
            <img
              className="absolute w-[135px] h-[110px] -top-3 -left-4 rotate-[165deg]"
              alt="Union"
              src="/union-1.svg"
            />
          </div>

          <div className="flex flex-col w-[1134px] h-[537px] items-center gap-10 absolute top-[266px] left-[264px]">
            <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
              <h1 className="relative self-stretch mt-[-1.00px] font-title-page font-[number:var(--title-page-font-weight)] text-primary-dark text-[length:var(--title-page-font-size)] text-center tracking-[var(--title-page-letter-spacing)] leading-[var(--title-page-line-height)] [font-style:var(--title-page-font-style)]">
                Choose Your Operational Structure
              </h1>

              <p className="relative w-[852px] [font-family:'Lato',Helvetica] font-semibold text-on-surface-tertiary text-xl text-center tracking-[0] leading-[22.8px]">
                This structure will help us customize your
                system.&nbsp;&nbsp;You can&apos;t change it later
              </p>
            </header>

            <main className="inline-flex items-center justify-center gap-12 relative flex-[0_0_auto]">
              {planData.map((plan, index) => (
                <Card
                  key={index}
                  className="inline-flex flex-col h-[400px] items-center justify-center gap-8 px-[29px] py-[30px] relative flex-[0_0_auto] bg-white rounded-[20px] overflow-hidden border border-solid border-[#00b48d]"
                >
                  <CardContent className="p-0 flex flex-col items-center justify-center gap-8 w-full h-full">
                    <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] mt-[-2.50px]">
                      <h2
                        className={`relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-bold ${plan.titleColor} text-3xl text-center tracking-[0] leading-[normal] whitespace-nowrap`}
                      >
                        {plan.title}
                      </h2>

                      <div className="inline-flex items-center justify-end gap-[3px] relative flex-[0_0_auto]">
                        <p className="relative w-[207px] mt-[-1.00px] [font-family:'Lato',Helvetica] font-medium text-on-surface-secondary text-sm text-center tracking-[0] leading-[normal]">
                          {plan.description}
                        </p>
                      </div>
                    </div>

                    <img
                      className="relative w-[248px] h-px object-cover"
                      alt="Vector"
                      src="/vector-1.svg"
                    />

                    <div className="flex flex-col w-[250px] items-start gap-5 relative flex-[0_0_auto]">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="inline-flex items-center gap-[7px] relative flex-[0_0_auto]"
                        >
                          <CheckIcon className="relative w-[18px] h-[18px] text-green-500" />
                          <span className="relative w-fit [font-family:'Lato',Helvetica] font-normal text-on-surface-primary text-[13px] text-center tracking-[0] leading-[normal]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button className="flex w-[248px] h-12 items-center justify-center gap-2 p-[10.5px] relative mb-[-2.50px] bg-secondary-dark rounded-[19px] overflow-hidden h-auto">
                      <span className="relative w-fit font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-bg-subtle text-[length:var(--title-16px-bold-font-size)] text-center tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                        Choose this plan
                      </span>
                      <ArrowRightIcon className="relative w-[17.75px] h-[11.05px]" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </main>
          </div>

          <img
            className="absolute w-[270px] h-60 top-[744px] left-[111px]"
            alt="Union"
            src="/union.svg"
          />

          <img
            className="absolute w-[165px] h-40 top-[815px] left-[1336px]"
            alt="Union"
            src="/union.svg"
          />
        </div>

        <div className="absolute w-[50px] h-[50px] top-[172px] left-[1389px] rotate-[120deg]">
          <img
            className="absolute w-[47px] h-[69px] top-[-19px] -left-1 rotate-[-120deg]"
            alt="Union"
            src="/union-2.svg"
          />
        </div>
      </div> */}
    </div>
  );
};
