import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { ReactNode } from "react";
import DateInput from "../DateInput";

const formFields = {
  companyInfo: [
    {
      label: "Logo",
      type: "upload",
      component: "upload",
    },
    {
      label: "Company Name",
      type: "inputs",
      fields: [
        { placeholder: "Enter Trade Name" },
        { placeholder: "Enter Legal Name" },
      ],
    },
    {
      label: "Year of Establishment",
      type: "date",
      placeholder: "Select Date",
    },
  ],
  companyOverview: [
    {
      label: "Overview",
      type: "textarea",
      placeholder: "Enter Overview",
    },
    {
      label: "Vision",
      type: "textarea",
      placeholder: "Enter Vision",
    },
    {
      label: "Goals",
      type: "textarea",
      placeholder: "Enter Goals",
    },
    {
      label: "CEO Name",
      type: "input",
      placeholder: "Enter Name",
    },
  ],
};
interface buttonProps {
  children?: ReactNode;
  title: string;
  handleNext: () => void;
  prevStep: () => void;
}
export const CompanyDetailsSection = ({
  handleNext,
  prevStep,
  title,
  children,
}: buttonProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 font-lato text-xs text-text-secondary font-regular leading-[130%] tracking-[0]">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Choosing Plan Page
        </button>
        <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
          Fill in {title} Details
        </h2>
        <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
          {title} Overview
        </p>
      </div>
      {/* Content */}
      <div className="bg-background-secondary p-[24px] rounded-[16px] w-full">
        <div className="flex flex-col w-full items-start gap-4 ">
          <Card className="w-full h-[208px] bg-background-primary rounded-2xl">
            <CardContent className="p-[16px]">
              <div className="flex w-full items-center justify-between mb-4">
                <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                  Company Info
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-8 ">
                <div className="space-y-3">
                  {formFields.companyInfo.slice(0, 1).map((field, index) => (
                    <div key={index} className="flex items-center gap-8">
                      <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                        {field.label}
                      </div>
                      <img alt="add photo" src="./addImage.svg" />
                    </div>
                  ))}

                  {formFields.companyInfo.slice(2, 3).map((field, index) => (
                    <div key={index + 2} className="flex items-center gap-8">
                      <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                        {field.label}
                      </div>
                      <DateInput/>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  {formFields.companyInfo.slice(1, 2).map((field, index) => (
                    <div key={index + 1} className="flex gap-8">
                      <div className="w-40 mt-[10px] font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                        {field.label}
                      </div>
                      <div className="flex flex-col w-[360px] gap-4">
                        {field.fields?.map((inputField, inputIndex) => (
                          <Input
                            key={inputIndex}
                            className="h-12 px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                            placeholder={inputField.placeholder}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full h-[248px] bg-background-primary rounded-2xl">
            <CardContent className="p-4">
              <div className="flex w-full items-center gap-4 mb-8">
                <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                  Company Overview
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-8 h-full">
                <div className="space-y-6">
                  {formFields.companyOverview
                    .slice(0, 1)
                    .map((field, index) => (
                      <div key={index} className="flex items-start gap-8">
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0] ">
                          {field.label}
                        </div>
                        <div className="flex flex-col w-[360px] relative">
                          <Textarea
                            className="w-fill h-auto px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                            placeholder={field.placeholder}
                          />
                        </div>
                      </div>
                    ))}

                  {formFields.companyOverview
                    .slice(2, 3)
                    .map((field, index) => (
                      <div key={index + 2} className="flex items-start gap-8">
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                          {field.label}
                        </div>
                        <div className="flex flex-col w-[360px] relative">
                          <Textarea
                            className="w-fill h-auto px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                            placeholder={field.placeholder}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="space-y-6">
                  {formFields.companyOverview
                    .slice(1, 2)
                    .map((field, index) => (
                      <div key={index + 1} className="flex items-start gap-8">
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                          {field.label}
                        </div>
                        <div className="flex flex-col w-[360px] relative">
                          <Textarea
                            className="w-fill h-auto px-4 py-2  rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                            placeholder={field.placeholder}
                          />
                        </div>
                      </div>
                    ))}

                  {formFields.companyOverview
                    .slice(3, 4)
                    .map((field, index) => (
                      <div
                        key={index + 3}
                        className="flex items-center gap-8 mt-12"
                      >
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                          {field.label}
                        </div>
                        <div className="flex w-[360px] gap-4">
                          <Input
                            className="flex-1 h-12 px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                            placeholder={field.placeholder}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </CardContent>
          </Card>
          {children}

          <div className="flex items-center justify-end gap-4 w-full ">
            <Button
              onClick={prevStep}
              variant="outline"
              className="w-[200px] h-auto bg-white rounded-[20px] border-2 border-solid border-[#e4e2dd] px-4 py-2.5"
            >
              <div className="flex w-[82px] items-center gap-1">
                <ChevronLeftIcon className="w-5 h-5" />
                <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                  Previous
                </span>
              </div>
            </Button>

            <Button
              onClick={handleNext}
              className="w-[200px] h-10 bg-secondary-dark rounded-[20px] px-4 py-2.5"
            >
              <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                Next
              </span>
              <ChevronRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
