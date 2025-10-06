import {
  PlusIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Textarea } from "../../components/ui/textarea";
import DateInput from "../CommonComponents/DateInput";
import PhoneInputCustom from "../CommonComponents/PhoneInput";

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
  {
    id: "department",
    title: "Department",
    fields: [
      {
        label: "Department Name",
        type: "select",
        placeholder: "Select Department",
      },
      {
        label: "Description",
        type: "text",
        value: "----",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Details",
    fields: [
      {
        label: "Phone Number",
        type: "phone",
        placeholder: "+966 50 000-0000",
      },
      {
        label: "Email",
        type: "input",
        placeholder: "Enter Email",
      },
    ],
  },
];

export const ClinicDetailsSectionMobile = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
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
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Clinic Name
                        </div>
                        <Input
                          className="text-text-secondary placeholder-text-secondary px-4 py-2 bg-transparent rounded border border-border-light"
                          placeholder="Enter Clinic Name"
                        />
                      </div>
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Year of Establishment
                        </div>
                        <DateInput lang="" />
                      </div>
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          PIC Name
                        </div>
                        <Select>
                          <SelectTrigger className="w-full text-text-secondary bg-base-white border-border-light">
                            <SelectValue placeholder="PIC Name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pic1">PIC 1</SelectItem>
                            <SelectItem value="pic2">PIC 2</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Services Offered
                        </div>
                        <Input
                          className="text-text-secondary placeholder-text-secondary px-4 py-2 bg-transparent rounded border border-border-light"
                          placeholder="Enter service"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex flex-col items-start gap-8">
                        <div className="w-40 font-lato font-medium text-base text-text-primary leading-[100%] tracking-[0]">
                          Description
                        </div>
                        <div className="relative">
                          <Textarea
                            className="w-full text-text-secondary placeholder-text-secondary h-28 px-4 py-2 bg-transparent rounded border border-border-light resize-none"
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
                          className="block w-full text-text-secondary px-4 py-2 bg-transparent rounded border border-solid border-border-light"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "capacity" && (
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex flex-col items-start gap-[10px]">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary ">
                        Staff Capacity
                      </div>
                      <Input
                        className="h-12 px-4 py-2  rounded border border-[#e4e2dd]"
                        placeholder="Staff Capacity"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[10px]">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                        Doctors Capacity
                      </div>
                      <Input
                        className="h-12 px-4 py-2  rounded border border-[#e4e2dd]"
                        placeholder="Doctors Capacity"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-[10px]">
                      <div className="w-[124px] font-lato font-semibold text-base treacking-[0] leading-[124%] text-text-primary">
                        Patients Capacity
                      </div>
                      <Input
                        className="h-12 px-4 py-2  rounded border border-[#e4e2dd]"
                        placeholder="Patient Capacity"
                      />
                    </div>
                  </div>
                )}

                {section.id === "department" && (
                  <div className="space-y-4">
                    <div className="flex flex-col items-start gap-[20px]">
                      <div className="font-lato font-semibold text-base text-text-primary leading-[124%] tracking-[0] ">
                        Department Name
                      </div>
                      <Select>
                        <SelectTrigger className="w-full h-12 bg-base-white border-[#d5d6d9]">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dept1">Department 1</SelectItem>
                          <SelectItem value="dept2">Department 2</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="font-lato font-semibold text-base text-text-primary leading-[124%] tracking-[0]">
                        Description
                      </div>
                      <div className="flex h-12 items-center gap-1 flex-1">
                        <div className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6">
                          ----
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {section.id === "contact" && (
                  <div className="flex flex-col items-start justify-between">
                    <div className="flex flex-col w-full items-start gap-2">
                      <div className="flex flex-col items-center gap-8 w-full">
                        <div className="w-40 font-lato font-medium text-base treacking-[0] leading-[100%] text-text-primary">
                          Phone Number
                        </div>
                        <PhoneInputCustom/>
                      </div>
                      <PlusIcon className="w-8 h-8 text-secondary-dark ml-auto" />
                    </div>
                    <div className="flex flex-col items-start gap-8">
                      <div className="w-40 font-lato font-medium text-base treacking-[0] leading-[100%] text-text-primary">
                        Email
                      </div>
                      <Input
                        className="px-4 py-2  rounded border border-[#e4e2dd]"
                        placeholder="Enter Email"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
