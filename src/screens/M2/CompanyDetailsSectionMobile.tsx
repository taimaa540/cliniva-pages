import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { ReactNode } from "react";
import DateInput from "../CommonComponents/DateInput";
import ImageUploader from "../CommonComponents/ImageUpload";

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
}
export const CompanyDetailsSectionMobile = ({
  title,
  children,
}: buttonProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
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
          <Card className="w-full bg-background-primary rounded-2xl">
            <CardContent className="p-[16px]">
              <div className="flex w-full items-center justify-between mb-4">
                <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                  Company Info
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                <div className="space-y-3">
                  {formFields.companyInfo.slice(0, 1).map((field, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                        {field.label}
                      </div>
                      <ImageUploader/>
                    </div>
                  ))}

                  {formFields.companyInfo.slice(2, 3).map((field, index) => (
                    <div key={index + 2} className="flex flex-col items-start gap-8 w-full">
                      <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                        {field.label}
                      </div>
                      <DateInput/>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  {formFields.companyInfo.slice(1, 2).map((field, index) => (
                    <div key={index + 1} className="flex flex-col gap-8">
                      <div className="w-40 mt-[10px] font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                        {field.label}
                      </div>
                      <div className="flex flex-col gap-4">
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
          <Card className="w-full bg-background-primary rounded-2xl">
            <CardContent className="p-4">
              <div className="flex w-full items-center gap-4 mb-8">
                <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                  Company Overview
                </h2>
              </div>

              <div className="grid gap-8 h-full">
                <div className="space-y-6">
                  {formFields.companyOverview
                    .slice(0, 1)
                    .map((field, index) => (
                      <div key={index} className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0] ">
                          {field.label}
                        </div>
                        <div className="flex flex-col relative">
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
                      <div key={index + 2} className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                          {field.label}
                        </div>
                        <div className="flex flex-col relative">
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
                      <div key={index + 1} className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                          {field.label}
                        </div>
                        <div className="flex flex-col relative">
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
                        className="flex flex-col items-start gap-8 mt-12"
                      >
                        <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                          {field.label}
                        </div>
                        <div className="flex gap-4">
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
        </div>
      </div>
    </div>
  );
};
