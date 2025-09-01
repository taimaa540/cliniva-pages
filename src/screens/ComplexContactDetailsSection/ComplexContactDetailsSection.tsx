import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
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
  { placeholder: "Building number", width: "w-[167px]" },
  { placeholder: "Street Name", width: "w-[167px]" },
  { placeholder: "Region", width: "w-[167px]" },
  { placeholder: "Country", width: "w-[167px]" },
  { placeholder: "Nation", width: "w-[167px]" },
];
interface buttonProps {
  handleNext: () => void;
  prevStep: () => void;
}
export const ComplexContactDetailsSection = ({
  handleNext,
  prevStep,
}: buttonProps): JSX.Element => {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex flex-col w-full min-h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
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
          Contact Details
        </p>
      </div>
      {/* Content */}
      <div className="bg-background-secondary p-[24px]  rounded-[16px] w-full h-full flex flex-col justify-between ">
        <Card className=" w-full h-[248px] py-[16px] px-[24px] mb-[16px] bg-background-primary">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center justify-between">
              <div className="text-primary-default text-[16px] font-lato font-bold leading-[124%] tracking-[0]">
                Contact Info
              </div>
            </div>

            <div className="flex flex-col w-[1129px] items-start gap-[16px]">
              <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col w-[552px] items-end gap-2 relative">
                  <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex w-40 items-center gap-2.5 relative">
                      <PhoneIcon className="relative w-6 h-6 " />
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
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-red"
                    >
                      <path
                        d="M8.74955 2.7875C10.6434 2.7375 12.4846 2.7375 14.3785 2.7875C17.4992 2.86949 19.2188 2.91529 20.5132 4.25625C21.8095 5.61123 21.8451 7.34844 21.9097 10.5014C21.9299 11.5083 21.93 12.4866 21.9097 13.4936C21.8451 16.6461 21.8093 18.3819 20.5162 19.7348C19.2198 21.0787 17.5002 21.1244 14.3794 21.2064C13.433 21.2314 12.4988 21.2445 11.565 21.2445C10.6311 21.2445 9.69691 21.2314 8.75053 21.2064C5.62991 21.1245 3.91017 21.0783 2.61577 19.7377C1.31943 18.3827 1.28288 16.6454 1.2183 13.4926C1.19806 12.4856 1.19807 11.5073 1.2183 10.5004C1.28288 7.34739 1.31935 5.6112 2.61284 4.2582C3.90919 2.91445 5.6288 2.86949 8.74955 2.7875ZM14.3414 4.28554C12.4725 4.23555 10.6555 4.23554 8.78569 4.28554C5.85803 4.36253 4.52204 4.3972 3.63627 5.31582C2.75146 6.24182 2.72338 7.58664 2.66362 10.5316C2.64338 11.5165 2.64338 12.4745 2.66362 13.4603C2.72337 16.4053 2.75151 17.7502 3.6392 18.6771C4.52303 19.593 5.85872 19.6294 8.78666 19.7064C10.6555 19.7564 12.4725 19.7564 14.3423 19.7064C17.2705 19.6294 18.6069 19.5942 19.4927 18.6752C20.3773 17.7492 20.4046 16.405 20.4644 13.4603C20.4846 12.4755 20.4846 11.5175 20.4644 10.5316C20.4046 7.58664 20.3775 6.24086 19.4898 5.31386C18.6059 4.39792 17.2695 4.36254 14.3414 4.28554ZM6.12358 8.11074C6.32695 7.75474 6.77068 7.63509 7.11381 7.84609L9.94877 9.58632C11.3676 10.4533 11.7615 10.4533 13.1822 9.58632L16.0162 7.84707C16.3603 7.63607 16.804 7.75471 17.0064 8.11171C17.2096 8.46868 17.0955 8.92813 16.7515 9.13808L13.9165 10.8783C12.971 11.4563 12.2676 11.7445 11.564 11.7445C10.8615 11.7444 10.1588 11.4552 9.2144 10.8783L6.37748 9.13711C6.03479 8.92601 5.92045 8.46654 6.12358 8.11074Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="absolute w-[129px] top-0.5 left-[31px] text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] whitespace-nowrap font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                      Email:
                    </div>
                  </div>

                  <Input
                    placeholder="Enter Email"
                    className="w-[360px] px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
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
                      className="w-[172px] px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                    />
                  ))}
                </div>
              </div>
              <div className="inline-flex justify-center relative flex-[0_0_auto] h-12 items-center gap-8">
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-6 h-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 11.2506C20.3402 11.2506 22.75 13.5936 22.75 16.4635C22.7499 17.934 22.125 19.158 21.2783 20.1461C20.4378 21.127 19.3524 21.9075 18.3545 22.5182L18.3438 22.525L18.332 22.5318C18.0781 22.6751 17.7914 22.7506 17.5 22.7506C17.2086 22.7506 16.9219 22.6751 16.668 22.5318L16.6543 22.524L16.6416 22.5162C15.649 21.9017 14.5644 21.1239 13.7236 20.1461C12.876 19.1602 12.2501 17.9387 12.25 16.4635C12.25 13.5936 14.6598 11.2506 17.5 11.2506ZM17.5 12.7506C15.4697 12.7506 13.75 14.4405 13.75 16.4635C13.7501 17.4816 14.1747 18.3689 14.8613 19.1676C15.5508 19.9694 16.4773 20.6494 17.4131 21.2301C17.4395 21.2433 17.4696 21.2506 17.5 21.2506C17.5308 21.2506 17.5612 21.2427 17.5879 21.2291C18.5226 20.6559 19.4494 19.9747 20.1387 19.1705C20.8255 18.3689 21.2499 17.4779 21.25 16.4635C21.25 14.4405 19.5303 12.7506 17.5 12.7506ZM7.98828 1.75156C8.49476 1.73509 8.95906 1.85034 9.4541 2.04257C9.92734 2.22637 10.4758 2.49992 11.1445 2.83457L14.5068 4.51816C14.7443 4.63698 14.8895 4.70636 14.9902 4.75058C14.9935 4.75054 14.9967 4.75058 15 4.75058C15.1285 4.75058 15.2478 4.78545 15.3535 4.84238C15.4629 4.84963 15.6273 4.85312 15.9209 4.85312H18.0527C18.9499 4.85309 19.7008 4.85276 20.2969 4.93515C20.9286 5.02252 21.4976 5.21564 21.9522 5.6832C22.4036 6.14772 22.5873 6.72345 22.6709 7.36289C22.7505 7.97187 22.75 8.74029 22.75 9.6666V10.5006C22.7498 10.9146 22.4141 11.2506 22 11.2506C21.5859 11.2506 21.2502 10.9146 21.25 10.5006V9.71738C21.25 8.72711 21.248 8.05747 21.1826 7.55722C21.1198 7.07661 21.0101 6.86605 20.876 6.72812C20.7447 6.59331 20.5488 6.48469 20.0918 6.42148C19.6105 6.35491 18.9646 6.35312 18 6.35312H15.8594C15.8223 6.35314 15.7858 6.35121 15.75 6.35117V9.50058C15.7498 9.91462 15.4141 10.2506 15 10.2506C14.5859 10.2506 14.2502 9.91462 14.25 9.50058V6.05918C14.1373 6.00639 14.0183 5.95079 13.8916 5.8873C13.8732 5.87808 13.8547 5.86839 13.8359 5.85898L10.5039 4.19199C9.79625 3.83786 9.31111 3.59536 8.91113 3.44003C8.85496 3.41822 8.80094 3.40003 8.75 3.38242V16.8199C9.25305 16.9102 9.71472 17.1023 10.1191 17.3014C10.3418 17.4109 10.5589 17.5281 10.7598 17.6373L10.7891 17.6539C10.9828 17.7592 11.1613 17.8556 11.3359 17.943C11.7063 18.1284 11.8562 18.5794 11.6709 18.9498C11.4855 19.3202 11.0345 19.4701 10.6641 19.2848C10.4657 19.1855 10.2667 19.0772 10.0791 18.9752L10.043 18.9557C9.84013 18.8454 9.64784 18.7414 9.45606 18.6471C9.06955 18.4569 8.72722 18.3275 8.40235 18.2828C7.65872 18.1807 7.05177 18.5352 6.11914 19.0797L6.0625 19.1119C5.44356 19.4733 4.92893 19.7738 4.50293 19.9674C4.07219 20.1631 3.60392 20.313 3.10938 20.2242C2.57481 20.1282 2.09595 19.839 1.75684 19.4156C1.44633 19.0279 1.34269 18.5482 1.2959 18.0699C1.24954 17.5959 1.24999 16.9896 1.25 16.2555V7.96445C1.24999 7.40957 1.24969 6.94068 1.28711 6.55234C1.32684 6.14027 1.41321 5.75989 1.61914 5.39609C1.82569 5.03132 2.10707 4.7646 2.43945 4.52304C2.75106 4.29661 3.14922 4.06381 3.61719 3.79062C3.62723 3.78476 3.63735 3.77894 3.64746 3.77304L4.90527 3.03867C5.55205 2.66105 6.08217 2.35153 6.54297 2.1373C7.02501 1.91324 7.48175 1.76809 7.98828 1.75156ZM7.17578 3.49765C6.78602 3.67883 6.3162 3.95162 5.63184 4.35117L4.40332 5.06796C3.89687 5.36364 3.56483 5.559 3.32129 5.73593C3.09187 5.90266 2.98989 6.02043 2.92481 6.13535C2.8591 6.25142 2.80846 6.40366 2.78027 6.69589C2.75059 7.00379 2.75 7.40011 2.75 7.99863V16.2164C2.75 16.9999 2.75071 17.5323 2.78906 17.9244C2.82785 18.3205 2.89603 18.4385 2.92774 18.4781C3.0441 18.6234 3.20391 18.7169 3.375 18.7477C3.41122 18.754 3.53316 18.761 3.88281 18.6021C4.23043 18.4442 4.67832 18.1838 5.3418 17.7965C5.39461 17.7656 5.44886 17.7332 5.50391 17.7008C5.99631 17.4105 6.57792 17.0673 7.25 16.8883V3.46543C7.22602 3.4761 7.20084 3.486 7.17578 3.49765ZM17.5088 15.5006C18.0611 15.5006 18.5088 15.9483 18.5088 16.5006C18.5086 17.0527 18.0609 17.5006 17.5088 17.5006H17.5C16.9478 17.5006 16.5002 17.0527 16.5 16.5006C16.5 15.9483 16.9477 15.5006 17.5 15.5006H17.5088Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="relative w-[134px] text-[length:var(--title-16px-semibold-font-size)] leading-[var(--title-16px-semibold-line-height)] font-title-16px-semibold font-[number:var(--title-16px-semibold-font-weight)] text-on-surface-primary tracking-[var(--title-16px-semibold-letter-spacing)] [font-style:var(--title-16px-semibold-font-style)]">
                    Maps Location:
                  </div>
                </div>

                <Input
                  placeholder="Pick Google Maps Location"
                  className="w-[360px] px-4 py-2 rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className=" flex items-center justify-end gap-4">
          <Button
            onClick={prevStep}
            variant="outline"
            className="w-[200px] h-auto bg-white border-2 border-[#e4e2dd] rounded-[20px] px-4 py-2.5"
          >
            <ChevronLeftIcon className="w-5 h-5" />
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              Previous
            </span>
          </Button>

          <Button
            onClick={handleNext}
            className="w-[200px] h-10 bg-secondary-dark rounded-[20px] px-4 py-2.5"
          >
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              Next
            </span>
            <ChevronRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
