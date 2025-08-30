import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
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

export const ContactInfoSection = (): JSX.Element => {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex flex-col w-[1217px] items-start gap-4 pl-0 pr-4 py-4 relative left-[240px]">
      <div className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between pl-1 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5 relative">
            <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
              <ArrowLeftIcon className="relative w-4 h-4" />
              <div className="relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                Back to Choosing Plan Page
              </div>
            </div>

            <div className="relative self-stretch text-[length:var(--h5-22px-bold-font-size)] leading-[var(--h5-22px-bold-line-height)] font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary tracking-[var(--h5-22px-bold-letter-spacing)] [font-style:var(--h5-22px-bold-font-style)]">
              Fill in Company Details
            </div>
          </div>
        </div>

        <div className="items-center gap-2.5 px-1 py-0 self-stretch w-full flex-[0_0_auto] flex relative">
          <div className="relative flex-1 mt-[-1.00px] text-[length:var(--title-14px-semibold-font-size)] leading-[var(--title-14px-semibold-line-height)] font-title-14px-semibold font-[number:var(--title-14px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-14px-semibold-letter-spacing)] [font-style:var(--title-14px-semibold-font-style)]">
            Contact Details
          </div>
        </div>
      </div>

      <div className="relative w-full h-[902px] bg-bg-subtle rounded-2xl overflow-hidden">
        <div className="inline-flex items-center gap-4 absolute top-[842px] right-5">
          <Button
            variant="outline"
            className="w-[200px] h-auto px-4 py-2.5 bg-white border-2 border-solid border-[#e4e2dd] rounded-[20px]"
          >
            <div className="flex w-[82px] items-center gap-1 relative">
              <ChevronLeftIcon className="relative w-5 h-5" />
              <div className="inline-flex h-5 items-center gap-2.5 px-0 py-0.5 relative flex-[0_0_auto]">
                <div className="relative w-fit font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] text-center tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]">
                  Previous
                </div>
              </div>
            </div>
          </Button>

          <Button className="w-[200px] h-auto gap-1 pl-4 pr-3.5 py-2.5 bg-secondary-dark rounded-[20px]">
            <div className="inline-flex items-center gap-2.5 p-0.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] text-center tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] whitespace-nowrap [font-style:var(--btn-14px-medium-font-style)]">
                Next
              </div>
            </div>
            <ChevronRightIcon className="relative w-5 h-5" />
          </Button>
        </div>

        <Card className="absolute w-[1161px] h-[312px] top-5 left-5 bg-[#fffcfc] rounded-2xl border-0">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center justify-between absolute top-4 left-4">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                Contact Info
              </div>
            </div>

            <div className="flex flex-col w-[1129px] items-start gap-6 absolute top-[52px] left-4">
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

        <Card className="absolute w-[1161px] h-[188px] top-[348px] left-5 bg-[#fffcfc] rounded-2xl border-0">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center gap-4 absolute top-4 left-4">
              <div className="relative w-fit mt-[-1.00px] font-title-16px-bold font-[number:var(--title-16px-bold-font-weight)] text-primary-dark text-[length:var(--title-16px-bold-font-size)] tracking-[var(--title-16px-bold-letter-spacing)] leading-[var(--title-16px-bold-line-height)] whitespace-nowrap [font-style:var(--title-16px-bold-font-style)]">
                Social Media Accounts
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-[41px] gap-y-6 absolute top-[52px] left-4 w-[1145px]">
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
      </div>
    </div>
  );
};
