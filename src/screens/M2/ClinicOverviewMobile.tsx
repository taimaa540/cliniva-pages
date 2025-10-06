import { ArrowLeftIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import DateInput from "../CommonComponents/DateInput";
import ImageUploader from "../CommonComponents/ImageUpload";

const formSections = [
  {
    id: "clinic-info",
    title: "Clinic Info",
    fields: [
      {
        label: "Clinic Name",
        type: "input",
        placeholder: "Enter Clinic Name",
        gridCols: "col-span-1",
      },
      {
        label: "Description",
        type: "textarea",
        placeholder: "Enter Description",
        gridCols: "col-span-1",
      },
      {
        label: "Year of Establishment",
        type: "date",
        placeholder: "Select Date",
        gridCols: "col-span-1",
      },
      {
        label: "PIC Name",
        type: "select",
        placeholder: "PIC Name",
        gridCols: "col-span-1",
      },
      {
        label: "Session Duration /Slot",
        type: "select",
        placeholder: "Select Duration",
        icon: "timer",
        gridCols: "col-span-1",
      },
      {
        label: "Services Offered",
        type: "input",
        placeholder: "Enter service",
        gridCols: "col-span-2",
      },
    ],
  },
  {
    id: "capacity",
    title: "Capacity",
    fields: [
      {
        label: "Staff Capacity",
        type: "input",
        placeholder: "Staff Capacity",
      },
      {
        label: "Doctors Capacity",
        type: "input",
        placeholder: "Doctors Capacity",
      },
      {
        label: "Patients Capacity",
        type: "input",
        placeholder: "Patient Capacity",
      },
    ],
  },
];

export const ClinicOverviewMobile = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 font-lato text-xs text-text-secondary font-regular leading-[130%] tracking-[0]">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Choosing Plan Page
        </button>
        <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
          Fill in Clinic Details
        </h2>
        <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
          Clinic Overview
        </p>
      </div>

      <div className="bg-background-secondary p-[24px] rounded-[16px] w-full">
        <div className="flex flex-col w-full items-start gap-4 ">
          {formSections.map((section) => (
            <Card
              key={section.id}
              className="w-full rounded-2xl bg-background-primary"
            >
              <CardHeader className="p-[16px]">
                <CardTitle className="text-primary-default font-lato font-bold text-base leading-[124%] tracking-[0]">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-[16px]">
                {section.id === "clinic-info" && (
                  <div className="grid gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-10">
                        <div className=" font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                          Logo
                        </div>
                        <ImageUploader/>
                      </div>
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Clinic Name
                        </div>
                        <Input
                          className="h-[48px] text-text-secondary bg-surface-primary  placeholder-text-secondary px-4 py-2 rounded border border-border-light"
                          placeholder="Enter Clinic Name"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Year of Establishment
                        </div>
                        <DateInput  />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Description
                        </div>
                        <div className="relative">
                          <Textarea
                            className="text-text-secondary placeholder-text-secondary h-28 px-4 py-2 bg-surface-primary rounded border border-border-light resize-none"
                            placeholder="Enter Description"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-8">
                        <div className=" font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Session Duration /Slot
                        </div>
                        <input
                          type="time"
                          className="block text-text-secondary px-4 py-2 bg-surface-primary rounded border border-solid border-border-light"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "capacity" && (
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary ">
                        Staff Capacity
                      </div>
                      <Input
                        className="h-12 px-4 py-2 bg-surface-primary rounded border border-[#e4e2dd]"
                        placeholder="Staff Capacity"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                        Doctors Capacity
                      </div>
                      <Input
                        className="h-12 px-4 py-2 bg-surface-primary rounded border border-[#e4e2dd]"
                        placeholder="Doctors Capacity"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                        Patients Capacity
                      </div>
                      <Input
                        className="h-12 px-4 py-2 bg-surface-primary rounded border border-[#e4e2dd]"
                        placeholder="Patient Capacity"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
          <Card className="w-full bg-background-primary rounded-2xl">
            <CardContent className="p-4">
              <div className="flex w-full items-center gap-4 mb-8">
                <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                  Company Overview
                </h2>
              </div>
              <div className="grid gap-8 h-full">
                <div className="space-y-6">
                  <div className="flex flex-col items-start gap-8">
                    <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0] ">
                      Overview
                    </div>
                    <div className="flex flex-col relative">
                      <Textarea
                        className="w-fill h-auto px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                        placeholder="Enter Overview"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-8">
                    <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                      Goals
                    </div>
                    <div className="flex flex-col relative">
                      <Textarea
                        className="w-fill h-auto px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                        placeholder="Enter Goals"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex flex-col items-start gap-8">
                    <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                      Vision
                    </div>
                    <div className="flex flex-col relative">
                      <Textarea
                        className="h-auto px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                        placeholder="Enter Vision"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-8 mt-12">
                    <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0]">
                      CEO Name
                    </div>
                    <div className="flex gap-4">
                      <Input
                        className="flex-1 h-12 px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                        placeholder="Enter Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
