import {
  ArrowLeftIcon,
  ChevronRightIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";

const addressFields = [
  { placeholder: "Building Number" },
  { placeholder: "Street Name" },
  { placeholder: "Region" },
  { placeholder: "Country" },
  { placeholder: "Nation" },
];

const socialMediaAccounts = [
  {
    icon: "/linkedin.svg",
    label: "LinkedIn",
    placeholder: "Enter LinkedIn Account",
  },
  {
    icon: "/X.svg",
    label: "Twitter",
    placeholder: "Enter Twitter Account",
  },
  {
    icon: "/FacebookOutline.svg",
    label: "Facebook",
    placeholder: "Enter Facebook Account",
  },
  {
    icon: "/Instagram.svg",
    label: "Instagram",
    placeholder: "Enter Instagram Account",
  },
];
interface buttonProps {
  handleNext : () => void;
  prevStep : () => void;
}
export const ContactInfoSection = ({handleNext, prevStep}: buttonProps): JSX.Element => {
  const [phone, setPhone] = useState("");
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
          Contact Details
        </p>
      </div>
      {/* Content */}
      <div className=" bg-background-secondary p-[24px] rounded-[16px] w-full">
        <Card className=" w-full h-[312px] py-[16px] px-[24px] mb-[16px]">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center justify-between">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                Contact Info
              </div>
            </div>

            <div className="flex flex-col w-[1129px] items-start gap-6">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[552px] items-end gap-2 relative">
                  <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex w-40 items-center gap-2.5 relative">
                      <PhoneIcon className="relative w-6 h-6" />
                      <div className="relative w-[162px] mr-[-36.00px] font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary text-[length:var(--title-16px-semibold-font-size)] tracking-[var(--title-16px-semibold-letter-spacing)] leading-[var(--title-16px-semibold-line-height)] [font-style:var(--title-16px-semibold-font-style)]">
                        PhoneIcon Number
                      </div>
                    </div>
                    <PhoneInput
                      country={"sa"} // الدولة الافتراضية
                      value={phone}
                      onChange={setPhone}
                      enableAreaCodes={true}
                      inputStyle={{
                        width: "360px",
                        height: "48px",
                        borderRadius: "4px",
                        border: "1px solid #E4E2DD",
                      }}
                    />
                  </div>
                  <button>
                    <PlusIcon className="relative w-8 h-8 text-[green]" />
                  </button>
                </div>

                <div className="inline-flex justify-center relative flex-[0_0_auto] h-12 items-center gap-8">
                  <div className="relative w-[162px] h-6">
                    <img alt="mail-02" src="./mail-02.svg" />
                    <div className="absolute w-[129px] top-0.5 left-[31px] text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] whitespace-nowrap font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                      Email:
                    </div>
                  </div>

                  <Input
                    placeholder="Enter Email"
                    className="w-[360px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex justify-center relative flex-[0_0_auto] h-12 items-center gap-8">
                  <div className="flex w-40 items-center gap-2 relative">
                    <GlobeIcon className="relative w-6 h-6" />
                    <div className="relative w-[134px] mr-[-6.00px] text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                      Company Website:
                    </div>
                  </div>

                  <Input
                    placeholder="Website"
                    className="w-[360px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>

                <div className="inline-flex justify-center relative flex-[0_0_auto] h-12 items-center gap-8">
                  <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                    <div className="relative w-6 h-6">
                      <img
                        className="absolute w-[22px] h-[21px] top-0.5 left-px"
                        alt="Elements"
                        src="/maps-location-02.svg"
                      />
                    </div>
                    <div className="relative w-[134px] text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                      Maps Location:
                    </div>
                  </div>

                  <Input
                    placeholder="Pick Google Maps Location"
                    className="w-[360px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex w-40 items-start gap-2 relative">
                  <MapPinIcon className="relative w-6 h-6" />
                  <div className="relative w-[134px] mt-[-1.00px] mr-[-6.00px] text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                    Physical Address:
                  </div>
                </div>

                <div className="w-[937px] items-start justify-between flex relative">
                  {addressFields.map((field, index) => (
                    <Input
                      key={index}
                      placeholder={field.placeholder}
                      className="w-[172px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full h-[188px] py-[16px] px-[24px]">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center gap-4 ">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                Social Media Accounts
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-[41px] gap-y-6 w-[1145px]">
              {socialMediaAccounts.map((account, index) => (
                <div
                  key={index}
                  className="flex w-[552px] h-12 items-center gap-8"
                >
                  <div className="flex w-40 items-center gap-2.5 relative">
                    {account.icon.includes("subtract") ? (
                      <div className="relative w-[23.27px] h-6 bg-[url(/subtract.svg)] bg-[100%_100%]" />
                    ) : (
                      <img
                        className="relative w-6 h-6"
                        alt={account.label}
                        src={account.icon}
                      />
                    )}
                    <div className="relative w-[126px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
                      {account.label}
                    </div>
                  </div>

                  <Input
                    placeholder={account.placeholder}
                    className="w-[360px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
              ))}
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
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
