import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

interface buttonProps {
  handleNext : () => void;
  prevStep : () => void;
}
export const LegalDetailsSection = ({handleNext, prevStep}:buttonProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 font-lato text-xs text-text-secondary font-regular leading-[130%] tracking-[0]">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Choosing Plan Page
        </button>
        <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
          Fill in Company Details
        </h2>
        <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
          Legal Details
        </p>
      </div>
      {/* Content */}
      <div className="bg-background-secondary p-[24px] rounded-[16px] w-full">
        {/* Legal Info */}
        <Card className="w-full h-[127px] py-[16px] px-[24px] mb-[16px] ">
          <CardContent className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-semibold text-primary-dark">
                Legal Info
              </h2>
            </div>

            <div className="flex items-center gap-[45px] mb-[24px] w-full">
              <div className="flex items-center gap-[32px] h-[48px] w-full">
                <label className="block w-[160px] ">VAT Number</label>
                <Input
                  type="text"
                  placeholder="Enter VAT Number"
                  className="bolck w-[360px] h-full rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
              </div>
              <div className="flex items-center gap-[32px] h-[48px] w-full">
                <label className="block w-[160px] ">CR Number</label>
                <Input
                  type="text"
                  placeholder="Enter CR Number"
                  className=" bolck w-[360px] h-full rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms & Conditions */}
        <Card className="w-full h-[192px] py-[16px] px-[24px] mb-[16px] ">
          <CardContent className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-semibold text-primary-dark">
                Terms &amp; Conditions
              </h2>
            </div>

            <div className="flex md:flex-row gap-8 items-start w-full mt-[16px]">
              <div>
                <label className="block w-[160px] mb-[8px] ">Title</label>
                <Input
                  className=" bolck w-[360px] h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  placeholder="Enter Title"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="block w-[160px]  ">Description</label>
                <Input
                  placeholder="Enter Content"
                  className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
                <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer relative left-[750px]" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card className="w-full h-[288px] py-[16px] pl-[24px] pr-[58px] mb-[16px] ">
          <CardContent className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-primary-dark">
              Privacy Policy
            </h3>
            <div className="flex md:flex-row gap-8 items-start w-full">
              <div>
                <label className="block w-[160px] mb-[8px] ">Title</label>
                <Input
                  className=" bolck w-[360px] h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  placeholder="Enter Title"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="block w-[160px]  ">Description</label>
                <Input
                  placeholder="Enter Content"
                  className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
              </div>
            </div>
            <hr />
            <div className="flex md:flex-row gap-8 items-start w-full ">
              <div>
                <Input
                  className=" bolck w-[360px] h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  placeholder="Enter Title"
                />
              </div>
              <div className="relative flex flex-col items-end gap-2 w-full">
                <Input
                  placeholder="Enter Content"
                  className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
                <MinusIcon className="absolute right-[-40px] top-[10px] "/>
                <PlusIcon/>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-end gap-4">
          <Button onClick={prevStep} variant="outline">
            <ChevronRightIcon className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button onClick={handleNext} className="bg-secondary-dark text-white rounded-full">
            Save &amp; Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
