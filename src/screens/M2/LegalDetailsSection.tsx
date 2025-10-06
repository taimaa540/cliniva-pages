import {
  ArrowLeftIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  ChevronLeftIcon
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";
interface buttonProps {
  title : string,
  handleNext : () => void;
  prevStep : () => void;
}
export const LegalDetailsSection = ({handleNext, prevStep, title}:buttonProps): JSX.Element => {
  return (
    <div className="hidden md:flex flex flex-col w-full h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 font-lato text-xs text-text-secondary font-regular leading-[130%] tracking-[0]">
            <Link to='/ChossPlan'>
                   <ArrowLeftIcon className="relative w-4 h-4" />
                   </Link>
          Back to Choosing Plan Page
        </button>
        <h2 className="font-lato text-xl text-text-primary font-semibold leading-[116%] tracking-[0]">
          Fill in {title} Details
        </h2>
        <p className="font-lato text-sm text-text-primary font-semibold leading-[125%] tracking-[0]">
          Legal Details
        </p>
      </div>
      {/* Content */}
      <div className="bg-background-secondary p-[24px] rounded-[16px] w-full">
        {/* Legal Info */}
        <Card className="w-full h-[127px] py-[16px] px-[24px] mb-[16px] bg-background-primary ">
          <CardContent className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0] ">
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
        <Card className="w-full h-[192px] py-[16px] px-[24px] mb-[16px] bg-background-primary ">
          <CardContent className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0] ">
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
                  placeholder="Enter Description"
                  className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
                <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer relative left-[750px] text-secondary-dark" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card className="w-full h-[288px] py-[16px] pl-[24px] pr-[58px] mb-[16px] bg-background-primary ">
          <CardContent className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0] ">
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
                  placeholder="Enter Description"
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
                  placeholder="Enter Description"
                  className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
                <MinusIcon className="absolute right-[-40px] top-[10px] text-secondary-dark "/>
                <PlusIcon className="text-secondary-dark"/>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
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
              <span  className="font-lato font-medium text-xs leading-[100%] tracking-[0] text-surface-primary">
                Save & Continue
              </span>
              <ChevronRightIcon className="w-5 h-5 ml-1" />
            </Button>
          </div>
      </div>
    </div>
  );
};
