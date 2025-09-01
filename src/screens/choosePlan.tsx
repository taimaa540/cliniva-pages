import { ArrowRightIcon, CheckIcon, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Route, Routes, Link } from "react-router-dom";
import { CompanyPlan } from "./CompanyPlan/CompanyPlan";
import { ComplexPlane } from "./ComplexPlane/ComplexPlane";
import { ClinicsPlane } from "./ClinicsPlan/ClinicsPlan";

export const ChoosePlan = (): JSX.Element => {
  return (
    <>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className=" w-full h-screen bg-surface-default overflow-hidden">
              <img
                className="absolute top-[19px] left-[80px] "
                alt="Union"
                src="/Group.svg"
              />
              <img
                className="absolute top-[40px] right-[105px] "
                alt="Union"
                src="/Group2.svg"
              />
              <img
                className="absolute bottom-[0px] left-[0px] "
                alt="Union"
                src="/Group3.svg"
              />
              <img
                className="absolute bottom-[19px] right-[80px]"
                alt="Union"
                src="/Group4.svg"
              />
              <div>
                <button className="group hover:bg-accent flex gap-4 absolute left-[220px] top-[30px] p-2.5 rounded-[16px]">
                  <ArrowLeft className=" group-hover:animate-arrow-bounce-to-left" />
                  <h6>Back to Login Page</h6>
                </button>
              </div>

              <div className="flex flex-col w-[1134px] h-[537px] items-center gap-10 mt-[100px] ml-auto mr-auto">
                <header className="flex flex-col items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <h1 className="text-[48px] font-bold text-primary-default">
                    Choose Your Operational Structure
                  </h1>

                  <p className="font-lato font-semibold text-on-surface-tertiary text-[20px] text-center tracking-[0] leading-[114%]">
                    This structure will help us customize your
                    system.&nbsp;&nbsp;You can&apos;t change it later
                  </p>
                </header>

                <main className="inline-flex items-center justify-center gap-12 relative flex-[0_0_auto]">
                  <Card className="inline-flex hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out flex-col h-[400px] items-center justify-center gap-8 px-[24px] py-[30px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#00b48d]">
                    <CardContent className="p-0 flex flex-col items-center justify-center gap-8 w-full h-full">
                      <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] mt-[-2.50px]">
                        <h3
                          className={`font-lato text-[26px] font-semibold text-on-surface-primary text-center tracking-[0] leading-[114%]`}
                        >
                          Company Plan
                        </h3>

                        <p className="w-[252px] font-lato font-semibold text-on-surface-secondary text-[14px] text-center tracking-[0] leading-[125%]">
                          Manage a network of multiple medical complexes, each
                          with its own departments and clinics
                        </p>
                      </div>
                      <hr className="w-[284px] text-on-surface-secondary" />
                      <div className="flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Centralized admin and reporting
                          </span>
                        </div>
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Multi-location support
                          </span>
                        </div>
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Role hierarchy across all levels
                          </span>
                        </div>
                      </div>
                      <Link to="/CompanyPlane">
                        <Button className="group flex w-[248px]  h-12 items-center justify-center gap-2 p-[10.5px] relative mb-[-2.50px] bg-secondary-dark rounded-[19px] overflow-hidden h-auto">
                          <span className="relative w-fit font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-bg-subtle text-[length:var(--title-16px-bold-font-size)] text-center tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                            Choose this plan
                          </span>
                          <ArrowRightIcon className="relative group-hover:animate-arrow-bounce w-[17.75px] h-[11.05px]" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="inline-flex hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out flex-col h-[400px] items-center justify-center gap-8 px-[24px] py-[30px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#00b48d]">
                    <CardContent className="p-0 flex flex-col items-center justify-center gap-8 w-full h-full">
                      <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] mt-[-2.50px]">
                        <h3
                          className={`font-lato text-[26px] font-semibold text-on-surface-primary text-center tracking-[0] leading-[114%]`}
                        >
                          Complex Plan
                        </h3>

                        <p className="w-[252px] font-lato font-semibold text-on-surface-secondary text-[14px] text-center tracking-[0] leading-[125%]">
                          Manage a single complex that contains various
                          departments and clinics under one roof
                        </p>
                      </div>
                      <hr className="w-[284px] text-on-surface-secondary" />
                      <div className="flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Localized administration
                          </span>
                        </div>
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Department-based control
                          </span>
                        </div>
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Full visibility over all clinics
                          </span>
                        </div>
                      </div>
                      <Link to="/ComplexPlane">
                        <Button className="group flex w-[248px]  h-12 items-center justify-center gap-2 p-[10.5px] relative mb-[-2.50px] bg-secondary-dark rounded-[19px] overflow-hidden h-auto">
                          <span className="relative w-fit font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-bg-subtle text-[length:var(--title-16px-bold-font-size)] text-center tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                            Choose this plan
                          </span>
                          <ArrowRightIcon className="relative group-hover:animate-arrow-bounce w-[17.75px] h-[11.05px]" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                  <Card className="inline-flex hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-in-out flex-col h-[400px] items-center justify-center gap-8 px-[24px] py-[30px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#00b48d]">
                    <CardContent className="p-0 flex flex-col items-center justify-center gap-8 w-full h-full">
                      <div className="inline-flex flex-col items-center justify-center gap-5 relative flex-[0_0_auto] mt-[-2.50px]">
                        <h3
                          className={`font-lato text-[26px] font-semibold text-on-surface-primary text-center tracking-[0] leading-[114%]`}
                        >
                          Single Clinic Plan
                        </h3>

                        <p className="w-[252px] font-lato font-semibold text-on-surface-secondary text-[14px] text-center tracking-[0] leading-[125%]">
                          A simplified setup for managing one independent clinic
                          with no additional branches or departments
                        </p>
                      </div>
                      <hr className="w-[284px] text-on-surface-secondary" />
                      <div className="flex flex-col items-start gap-5 relative flex-[0_0_auto]">
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Minimal setup
                          </span>
                        </div>
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Quick onboarding
                          </span>
                        </div>
                        <div className="inline-flex w-[252px] items-center gap-[7px] relative flex-[0_0_auto]">
                          <div className="w-[18px] h-[18px]">
                            <CheckIcon className=" w-[18px] h-[18px] text-white bg-secondary-dark rounded-[50%]" />
                          </div>
                          <span className=" font-lato font-bold text-on-surface-primary text-[14px] tracking-[0] leading-[100%]">
                            Direct management by the clinic owner or manager
                          </span>
                        </div>
                      </div>
                      <Link to="/ClinicPlane">
                        <Button className="group flex w-[248px]  h-12 items-center justify-center gap-2 p-[10.5px] relative mb-[-2.50px] bg-secondary-dark rounded-[19px] overflow-hidden h-auto">
                          <span className="relative w-fit font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-bg-subtle text-[length:var(--title-16px-bold-font-size)] text-center tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                            Choose this plan
                          </span>
                          <ArrowRightIcon className="relative group-hover:animate-arrow-bounce w-[17.75px] h-[11.05px]" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </main>
              </div>
            </div>
          }
        />
        <Route path="/CompanyPlane" element={<CompanyPlan/>} />
        <Route path="/ComplexPlane" element={<ComplexPlane/>}/>
        <Route path="/ClinicPlane" element={<ClinicsPlane/>}/>
      </Routes>
    </>
  );
};
