"use client";
import { UserCircleIcon, PlusIcon } from "lucide-react";
import { ClinicDetailsSection } from "../ClinicDetailsSection/ClinicDetailsSection";
import { ClinicWorkSchedule } from "../ClinicWorkingSchedule/ClinicWorkingScheduleSection";
import { CompanyDetailsSection } from "../CompanyDetailsSection/CompanyDetailsSection";
import { ContactInfoSection } from "../CompanyPlanFillInConact/ContactInfoSectionContant";
import { LegalDetailsSection } from "../CompanyPlanFillInLegal/LegalDetailsSection";
import { ComplexWorkSchedule } from "../ComplexWorkingSchedule/ComplexWorkingScheduleSection";
import { AccountCreationSection } from "../CompanyPlan/sections/AccountCreationSection";
import { Input } from "../../components/ui/input";
import { Card, CardContent } from "../../components/ui/card";
import { useState } from "react";

import "react-phone-input-2/lib/style.css";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const ComplexPlane = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [showDialog, setShowDialog] = useState(false);

  const handleNext = () => {
    if (currentStep < 7) setCurrentStep((prev) => (prev + 1) as Step);
    else if (currentStep === 7) {
      setShowDialog(true); // آخر خطوة → إظهار الـ Dialog
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => (prev - 1) as Step);
  };
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-[280px] h-screen bg-surface-default">
        {/* Logo */}
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

        {/* Account Setup Section */}
        <div className="flex flex-col  items-start gap-[16px] ml-5 mt-[30px] ">
          <div className="flex items-center gap-2 mb-4">
            <UserCircleIcon
              className={`w-5 h-5 ${
                currentStep === 1
                  ? "text-primary-default"
                  : "text-secondary-dark"
              }`}
            />
            <span
              className={`font-medium ${
                currentStep > 1 ? "text-secondary-dark" : "text-primary-default"
              }`}
            >
              Account Setup
            </span>
          </div>
          <div className="bg-background-tertiary w-[33px] h-[275px] rounded-[109px] absolute top-[145px] left-[17px] z-0"></div>
          {/* Step 1 */}
          <div className="mb-2 relative z-1">
            <div className="flex items-center gap-[8px] mb-3 relative z-1">
              <div
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 2
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep === 3
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep === 4
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep > 4
                    ? "bg-[#83DFDF] text-white"
                    : "bg-primary-foreground text-text-primary"
                }`}
              >
                1
              </div>
              <span className={`font-medium text--text-primary`}>
                Fill in Complex Details
              </span>
            </div>
            <div className="ml-2 space-y-2">
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    currentStep === 2
                      ? "bg-primary-default"
                      : currentStep > 2
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  } flex items-center justify-center text-xs font-medium text-white
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 2
                      ? "text-primary-default"
                      : currentStep > 2
                      ? "text-secondary-dark"
                      : "text-text-secondary"
                  }`}
                >
                  Complex Overview
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 3
                      ? "bg-primary-default"
                      : currentStep > 3
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 3
                      ? "text-primary-default"
                      : currentStep > 3
                      ? "text-secondary-dark"
                      : "text-text-secondary"
                  } `}
                >
                  Contact Details
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 4
                      ? "bg-primary-default"
                      : currentStep > 4
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  }
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 4
                      ? "text-primary-default"
                      : currentStep > 4
                      ? "text-secondary-dark"
                      : "text-text-secondary"
                  }`}
                >
                  Legal Details
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 5
                      ? "bg-primary-default"
                      : currentStep > 5
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  }
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 5
                      ? "text-primary-default"
                      : currentStep > 5
                      ? "text-secondary-dark"
                      : "text-text-secondary"
                  }`}
                >
                  Working Schedule
                </span>
              </div>
            </div>
          </div>
          {/* Step 2 */}
          <div className="mb-2 relative z-1">
            <div className="flex items-center gap-[8px] mb-3 relative z-1">
              <div
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 6
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep === 7
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep > 7
                    ? "bg-[#83DFDF] text-white"
                    : "bg-primary-foreground text-text-primary"
                }`}
              >
                2
              </div>
              <span className={`font-medium text--text-primary`}>
                Fill in Clinic Details
              </span>
            </div>
            <div className="ml-2 space-y-2">
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    currentStep === 6
                      ? "bg-primary-default"
                      : currentStep > 6
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  } flex items-center justify-center text-xs font-medium text-white
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 6
                      ? "text-primary-default"
                      : currentStep > 6
                      ? "text-secondary-dark"
                      : "text-text-secondary"
                  }`}
                >
                  Clinic Overview
                </span>
              </div>

              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 7
                      ? "bg-primary-default"
                      : currentStep > 7
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  }
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 7
                      ? "text-primary-default"
                      : currentStep > 7
                      ? "text-secondary-dark"
                      : "text-text-secondary"
                  }`}
                >
                  Working Schedule
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      {currentStep === 1 && <AccountCreationSection handleNext={handleNext} />}
      {currentStep === 2 && (
        <CompanyDetailsSection
          title="complex"
          handleNext={handleNext}
          prevStep={prevStep}
        >
          <Card className="w-full h-[192px] bg-background-primary rounded-2xl ">
            <CardContent className="flex flex-col p-[16px]">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0]">
                  Department
                </h2>
              </div>

              <div className="flex md:flex-row gap-8 items-start w-full mt-[16px]">
                <div>
                  <label className="block w-[160px] mb-[8px] ">Department Name</label>
                  <Input
                    className=" bolck w-[360px] h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                    placeholder="Enter Title"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="block w-[160px] ">Description</label>
                  <Input
                    placeholder="Enter Content"
                    className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  />
                  <PlusIcon className="w-6 h-6 text-secondary-dark cursor-pointer relative left-[750px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </CompanyDetailsSection>
      )}
      {currentStep === 3 && (
        <ContactInfoSection title="complex" handleNext={handleNext} prevStep={prevStep} />
      )}
      {currentStep === 4 && (
        <LegalDetailsSection title="complex" handleNext={handleNext} prevStep={prevStep} />
      )}
      {currentStep === 5 && (
        <ComplexWorkSchedule handleNext={handleNext} prevStep={prevStep} />
      )}
      {currentStep === 6 && (
        <ClinicDetailsSection
          handleNext={handleNext}
          prevStep={prevStep}
        />
      )}
      {currentStep === 7 && (
        <ClinicWorkSchedule handleNext={handleNext} prevStep={prevStep} />
      )}
      {/* Next Button */}

      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" bg-white rounded-lg shadow-lg w-[500px] h-[144px] ">
            <button className="ml-[450px] mt-[16px] p-[5px] rounded-[16px] hover:bg-surface-hover transiton duration-300">
              <img alt="" src="x-close.svg" />
            </button>
            <img alt="" src="./FeaturedIcon.svg" className="m-auto" />
            <p className=" text-center font-lato font-semibold text-xl leading-[118%] tracking-[0] text-[#181D27] ">
              Complex plan has been successfully set up.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
