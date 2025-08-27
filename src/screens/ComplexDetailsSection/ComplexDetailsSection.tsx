import { ArrowLeftIcon, ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
interface buttonProps {
  handleNext : () => void;
  prevStep : () => void;
}
export const ComplexDetailsSection = ({handleNext, prevStep}:buttonProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 font-lato text-xs text-text-secondary font-regular leading-[130%] tracking-[0]">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Choosing Plan Page
        </button>
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
          <Card className="w-full h-[252px] rounded-2xl">
            <CardContent className="p-[16px]">
              <div className="flex w-full items-center justify-between mb-4">
                <h2 className="text-primary text-[16px] font-lato font-bold leading-[124%] tracking-[0] ">
                  Complex Info
                </h2>
              </div>
              <div className="flex gap-[25px] ">
                <div>
                  <div className="flex items-center gap-8">
                    <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                      Complex Name
                    </div>
                    <div className="flex flex-col w-[360px] gap-4">
                      <Input
                        className="h-12 px-4 py-2 rounded border border-solid border-border-light [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base"
                        placeholder="Enter Complex Name"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-8 mt-[24px]">
                    <div className="w-40 font-lato font-semibold text-[16px] text-text-primary leading-[124%] tracking-[0] ">
                      Description
                    </div>
                    <div className="flex flex-col w-[360px] relative">
                      <Textarea
                        className="w-fill h-[112px] px-4 py-2 rounded border border-solid border-border-light [font-family:'Lato',Helvetica] font-normal text-gray-600 text-base resize-none"
                        placeholder="Enter Description"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-8">
                    <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                      Year of Establishment
                    </div>
                    <input
                      type="date"
                      className="block w-[360px] px-4 py-2 bg-transparent rounded border border-solid border-border-light"
                    />
                  </div>
                  <div className="flex items-center gap-8 mt-[24px]">
                    <div className="w-40 font-semibold text-[16px] text-text-primary font-lato leading-[124%] tracking-[0]">
                      PIC Name
                    </div>
                    <div className="flex flex-col w-[360px] gap-4">
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
          <Card className="w-full h-[192px] py-[16px] px-[24px] mb-[16px] ">
            <CardContent className="flex flex-col">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-lg font-semibold text-primary-dark">
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

            <Button onClick={handleNext} className="w-[200px] h-10 bg-secondary-dark rounded-[20px] px-4 py-2.5">
              <span  className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-primary text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
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
