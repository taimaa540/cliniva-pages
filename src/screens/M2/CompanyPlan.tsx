"use client";
import { UserCircleIcon } from "lucide-react";
import { ClinicDetailsSection } from "./ClinicDetailsSection";
import { ClinicWorkSchedule } from "./ClinicWorkingScheduleSection";
import { CompanyDetailsSection } from "./CompanyDetailsSection";
import { ContactInfoSection } from "./ContactInfoSectionContant";
import { LegalDetailsSection } from "./LegalDetailsSection";
import { ComplexContactDetailsSection } from "./ComplexContactDetailsSection";
import { ComplexDetailsSection } from "./ComplexDetailsSection";
import { ComplexWorkSchedule } from "./ComplexWorkingScheduleSection";
import { AccountCreationSection } from "./AccountCreationSection";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-phone-input-2/lib/style.css";

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export const CompanyPlan = (): JSX.Element => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
    const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);
  useEffect(() => {
    if (showDialog) {
      const timer = setTimeout(() => {
        navigate("/ElementViewCompany"); // غير الرابط للي بدك تروح عليه
      }, 3000); // 3000ms = 3 ثواني

      return () => clearTimeout(timer); // تنظيف التايمر إذا أغلق الدايالوج
    }
  }, [showDialog, navigate]);
  const handleNext = () => {
    if (currentStep < 9) setCurrentStep((prev) => (prev + 1) as Step);
    else if (currentStep === 9) {
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
          <div
            className="bg-background-tertiary w-[33px] h-[409px] rounded-[109px] absolute top-[145px] left-[17px] z-0"
          ></div>

          {/* Step 1 */}
          <div className="mb-2 relative z-1" >
            <div
              className="flex items-center gap-[8px] mb-3 relative z-1"
            >
              <div
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 2
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep === 3
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep > 3 ? "bg-[#83DFDF] text-white" : "bg-primary-foreground text-text-primary"
                }`}
              >
                1
              </div>
              <span className={`font-medium text--text-primary`}>
                Fill in Company Details
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
                  Company Overview
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
            </div>
          </div>

          {/* Step 2  */}
          <div className="mb-2 relative z-1" >
            <div
              className="flex items-center gap-[8px] mb-3 relative z-1"
            >
              <div
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 5
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep === 6
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep > 6 ? "bg-[#83DFDF] text-white" : "bg-primary-foreground text-text-primary"
                }`}
              >
                2
              </div>
              <span className={`font-medium text--text-primary`}>
               Fill in Complex Details
              </span>
            </div>
            <div className="ml-2 space-y-2">
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full ${
                    currentStep === 5
                      ? "bg-primary-default"
                      : currentStep >5 
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  } flex items-center justify-center text-xs font-medium text-white
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
                  Complex Overview
                </span>
              </div>
              <div className="flex items-center gap-[20px]">
                <div
                  className={`w-[10px] h-[10px] rounded-full flex items-center justify-center text-xs font-medium text-white ${
                    currentStep === 6
                      ? "bg-primary-default"
                      : currentStep > 6
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  }`}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 6
                      ? "text-primary-default"
                      : currentStep > 6
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
          {/* Step 3 */}
          <div className="mb-2 relative z-1" >
            <div
              className="flex items-center gap-[8px] mb-3 relative z-1"
            >
              <div
                className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep === 8
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep === 9
                    ? "bg-[#A5C8F2] text-white"
                    : currentStep > 9 ? "bg-[#83DFDF] text-white" : "bg-primary-foreground text-text-primary"
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
                    currentStep === 8
                      ? "bg-primary-default"
                      : currentStep > 8
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  } flex items-center justify-center text-xs font-medium text-white
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 8
                      ? "text-primary-default"
                      : currentStep > 8
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
                   currentStep === 9
                      ? "bg-primary-default"
                      : currentStep > 9
                      ? "bg-secondary-dark"
                      : "bg-border-medium"
                  }
                   `}
                ></div>
                <span
                  className={`text-sm font-medium ${
                    currentStep === 9
                      ? "text-primary-default"
                      : currentStep > 9
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
      {currentStep === 2 && <CompanyDetailsSection title="Company" handleNext={handleNext} prevStep={prevStep} />}
      {currentStep === 3 && <ContactInfoSection title="Company" handleNext={handleNext} prevStep={prevStep}/>}
      {currentStep === 4 && <LegalDetailsSection title="Company" handleNext={handleNext} prevStep={prevStep}/>}
      {currentStep === 5 && <ComplexDetailsSection handleNext={handleNext} prevStep={prevStep}/>}
      {currentStep === 6 && (
        <ComplexContactDetailsSection handleNext={handleNext} prevStep={prevStep}/>
      )}
      {currentStep === 7 && <ComplexWorkSchedule handleNext={handleNext} prevStep={prevStep}/>}
      {currentStep === 8 && <ClinicDetailsSection handleNext={handleNext} prevStep={prevStep}/>}
      {currentStep === 9 && <ClinicWorkSchedule handleNext={handleNext} prevStep={prevStep}/>}
      {/* Next Button */}

      {showDialog && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" bg-white rounded-lg shadow-lg w-[500px] h-[144px] ">
              <button className="ml-[450px] mt-[16px] p-[5px] rounded-[16px] hover:bg-surface-hover transiton duration-300">
         
              </button>
              <img alt="" src="./FeaturedIcon.svg" className="m-auto" />
              <p className=" text-center font-lato font-semibold text-xl leading-[118%] tracking-[0] text-[#181D27] ">
                Company plan has been successfully set up.
              </p>
            </div>
          </div>
        )}
    </div>
  );
};
