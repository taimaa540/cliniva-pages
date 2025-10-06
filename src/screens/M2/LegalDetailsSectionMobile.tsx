import {
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";

interface buttonProps {
  title: string;
}
export const LegalDetailsSectionMobile = ({
  title,
}: buttonProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full items-start gap-4 pl-0 pr-4 py-4">
      {/* Header */}
      <div className="flex flex-col gap-2">
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
        <Card className="w-full py-[16px] px-[24px] mb-[16px] bg-background-primary ">
          <CardContent className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0]">
                Legal Info
              </h2>
            </div>

            <div className="flex flex-col items-start gap-[45px] mb-[24px] w-full mt-[20px]">
              <div>
                <label className="block w-[160px] ">VAT Number</label>
                <Input
                  type="text"
                  placeholder="Enter VAT Number"
                  className="bolck h-full rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="block w-[160px] ">CR Number</label>
                <Input
                  type="text"
                  placeholder="Enter CR Number"
                  className=" bolck h-full rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Terms & Conditions */}
        <Card className="w-full py-[16px] px-[24px] mb-[16px] bg-background-primary ">
          <CardContent className="flex flex-col">
            <div className="flex items-center justify-between w-full">
              <h2 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0] ">
                Terms &amp; Conditions
              </h2>
            </div>

            <div className="flex flex-col gap-8 items-start w-full mt-[16px]">
              <div>
                <label className="block w-[160px] mb-[8px] ">Title</label>
                <Input
                  className=" bolck h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  placeholder="Enter Title"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="block w-[160px]  ">Description</label>
                <Input
                  placeholder="Enter Description"
                  className=" bolck w-full h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
                <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer text-secondary-dark ml-auto" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Privacy Policy */}
        <Card className="w-full  py-[16px] px-[24px] mb-[16px] bg-background-primary ">
          <CardContent className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-primary-default font-lato leading-[124%] tracking-[0] ">
              Privacy Policy
            </h3>
            <div className="flex flex-col gap-8 items-start w-full">
              <div>
                <label className="block w-[160px] mb-[8px] ">Title</label>
                <Input
                  className=" bolck h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  placeholder="Enter Title"
                />
                <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer text-secondary-dark ml-auto" />
                <div className=" flex flex-col items-end gap-2 w-full">
                  <Input
                    className=" bolck h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                    placeholder="Enter Title"
                  />
                  <MinusIcon className="text-secondary-dark " />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label className="block w-[160px]">Description</label>
                <Input
                  placeholder="Enter Description"
                  className=" bolck h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                />
                <PlusIcon className="w-6 h-6 text-gray-600 cursor-pointer text-secondary-dark ml-auto" />
                <div className=" flex flex-col items-end gap-2 w-full">
                  <Input
                    placeholder="Enter Description"
                    className=" bolck h-[48px] rounded-[4px] py-[8px] px-[16px] border border-border-light "
                  />
                  <MinusIcon className="text-secondary-dark " />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
