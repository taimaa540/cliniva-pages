import {
  PlusIcon,
} from "lucide-react";

import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import DateInput from "../CommonComponents/DateInput";
export const ComplexDetailsSectionMobile = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
          Fill in Complex Details
        </h2>
        <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
          Complex Overview
        </p>
      </div>
      {/* Content */}
      <div className="bg-background-secondary p-[24px] rounded-[16px] w-full">
        <div className="flex flex-col w-full items-start gap-4 ">
          <Card className="w-full rounded-2xl bg-background-primary">
            <CardContent className="p-[16px]">
              <div className="flex w-full items-center justify-between mb-4">
                <h2 className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                  Complex Info
                </h2>
              </div>
              <div className="flex flex-col gap-[25px] ">
                <div>
                  <div className="flex flex-col items-start gap-8">
                    <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                      Complex Name
                    </div>
                    <div className="flex flex-col gap-4">
                      <Input
                        className="h-12 px-4 py-2 rounded border border-solid border-border-light [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                        placeholder="Enter Complex Name"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-8 mt-[24px]">
                    <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0] ">
                      Description
                    </div>
                    <div className="flex flex-col relative">
                      <Textarea
                        className="w-fill h-[112px] px-4 py-2 rounded border border-solid border-border-light [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                        placeholder="Enter Description"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col items-start gap-8">
                    <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                      Year of Establishment
                    </div>
                    <DateInput />
                  </div>
                  <div className="flex flex-col items-start gap-8 mt-[24px]">
                    <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                      PIC Name
                    </div>
                    <div className="flex flex-col gap-4">
                      <Input
                        className="h-12 px-4 py-2 rounded border border-solid border-border-light [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                        placeholder="PIC Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full py-[16px] px-[24px] mb-[16px] bg-background-primary">
            <CardContent className="flex flex-col">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0]">
                  Department
                </h2>
              </div>

              <div className="flex flex-col gap-8 items-start w-full mt-[16px]">
                <div>
                  <label className="block w-[160px] mb-[8px] ">
                    Department Name
                  </label>
                  <Input
                    className=" bolck h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                    placeholder="Enter Name"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="block w-[160px] ">Description</label>
                  <Input
                    placeholder="Enter Description"
                    className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  />
                  <PlusIcon className="w-6 h-6 text-secondary-dark cursor-pointer ml-auto" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
