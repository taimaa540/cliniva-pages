import {
  ArrowLeftIcon,
  ChevronRightIcon,
  GlobeIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  ChevronLeftIcon,
} from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import { Link } from "react-router-dom";
const addressFields = [
  { placeholder: "Building Number" },
  { placeholder: "Street Name" },
  { placeholder: "Region" },
  { placeholder: "Country" },
  { placeholder: "Nation" },
];

interface buttonProps {
  title: string;
  handleNext: () => void;
  prevStep: () => void;
}
export const ContactInfoSection = ({
  handleNext,
  prevStep,
  title,
}: buttonProps): JSX.Element => {
  const [phone, setPhone] = useState("");
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
          Contact Details
        </p>
      </div>
      {/* Content */}
      <div className=" bg-background-secondary p-[24px] rounded-[16px] w-full">
        <Card className=" w-full h-[312px] py-[16px] px-[24px] mb-[16px] bg-background-primary">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center justify-between">
              <div className="text-primary-default font-lato font-bold text-base leading-[124%] tracking-[0]">
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
                    <PlusIcon className="relative w-8 h-8 text-secondary-dark" />
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

        <Card className="w-full h-[188px] py-[16px] px-[24px] bg-background-primary">
          <CardContent className="p-0">
            <div className="flex w-[1129px] items-center gap-4 ">
              <div className="text-primary-default font-lato font-bold text-base leading-[124%] tracking-[0]">
                Social Media Accounts
              </div>
            </div>

            <div className="mt-[16px]">
              <div className="flex w-[552px] h-12 items-center gap-8">
                <div className="flex ">
                  <div className="flex w-40 items-center gap-2.5 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6 9H2V21H6V9Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="relative w-[126px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
                      LinkedIn
                    </div>
                  </div>
                  <Input
                    placeholder="Enter LinkedIn Account"
                    className="w-[360px] h-[48px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
                <div className="flex ">
                  <div className="flex w-40 items-center gap-2.5 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.0174851 24H2.04576L9.98402 14.6892L16.2962 24H23.2727L13.8657 10.1925L22.5034 0H20.4401L12.939 8.81705L6.92412 0H0L9.09228 13.3666L0.0174851 24ZM2.79762 1.56943H5.92746L20.4576 22.5187H17.2928L2.79762 1.56943Z"
                        fill="currentColor"
                      />
                    </svg>

                    <div className="relative w-[126px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
                      Twitter
                    </div>
                  </div>
                  <Input
                    placeholder="Enter Twitter Account"
                    className="w-[360px] h-[48px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
              </div>
              <div className="flex w-[552px] h-12 items-center gap-8 mt-[24px]">
                <div className="flex ">
                  <div className="flex w-40 items-center gap-2.5 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12.0004C22 6.47754 17.5229 2.00039 12 2.00039C6.47715 2.00039 2 6.47754 2 12.0004C2 16.9917 5.65686 21.1287 10.4375 21.8789V14.891H7.89844V12.0004H10.4375V9.79726C10.4375 7.29101 11.9304 5.90664 14.2146 5.90664C15.3087 5.90664 16.4531 6.10195 16.4531 6.10195V8.56289H15.1921C13.9499 8.56289 13.5625 9.33373 13.5625 10.1245V12.0004H16.3359L15.8926 14.891H13.5625V21.8789C18.3431 21.1287 22 16.9917 22 12.0004Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="relative w-[126px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
                      Facebook
                    </div>
                  </div>
                  <Input
                    placeholder="Enter Facebook Account"
                    className="w-[360px] h-[48px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
                <div className="flex ">
                  <div className="flex w-40 items-center gap-2.5 relative">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_6421_102122)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.05273 0.072C8.33236 0.0130909 8.74036 0 12 0C15.2596 0 15.6676 0.0141818 16.9462 0.072C18.2247 0.129818 19.0975 0.333818 19.8611 0.629454C20.6607 0.931636 21.3862 1.404 21.9862 2.01491C22.5971 2.61382 23.0684 3.33818 23.3695 4.13891C23.6662 4.90255 23.8691 5.77527 23.928 7.05164C23.9869 8.33345 24 8.74145 24 12C24 15.2596 23.9858 15.6676 23.928 16.9473C23.8702 18.2236 23.6662 19.0964 23.3695 19.86C23.0684 20.6608 22.5963 21.3864 21.9862 21.9862C21.3862 22.5971 20.6607 23.0684 19.8611 23.3695C19.0975 23.6662 18.2247 23.8691 16.9484 23.928C15.6676 23.9869 15.2596 24 12 24C8.74036 24 8.33236 23.9858 7.05273 23.928C5.77636 23.8702 4.90364 23.6662 4.14 23.3695C3.33919 23.0683 2.61362 22.5963 2.01382 21.9862C1.40332 21.3869 0.930889 20.6617 0.629454 19.8611C0.333818 19.0975 0.130909 18.2247 0.072 16.9484C0.0130909 15.6665 0 15.2585 0 12C0 8.74036 0.0141818 8.33236 0.072 7.05382C0.129818 5.77527 0.333818 4.90255 0.629454 4.13891C0.931334 3.33827 1.40413 2.61307 2.01491 2.01382C2.61386 1.40346 3.3387 0.931029 4.13891 0.629454C4.90255 0.333818 5.77527 0.130909 7.05164 0.072H7.05273ZM16.8491 2.232C15.5836 2.17418 15.204 2.16218 12 2.16218C8.796 2.16218 8.41636 2.17418 7.15091 2.232C5.98036 2.28545 5.34545 2.48073 4.92218 2.64545C4.36255 2.86364 3.96218 3.12218 3.54218 3.54218C3.14405 3.92951 2.83765 4.40103 2.64545 4.92218C2.48073 5.34545 2.28545 5.98036 2.232 7.15091C2.17418 8.41636 2.16218 8.796 2.16218 12C2.16218 15.204 2.17418 15.5836 2.232 16.8491C2.28545 18.0196 2.48073 18.6545 2.64545 19.0778C2.83745 19.5982 3.144 20.0705 3.54218 20.4578C3.92945 20.856 4.40182 21.1625 4.92218 21.3545C5.34545 21.5193 5.98036 21.7145 7.15091 21.768C8.41636 21.8258 8.79491 21.8378 12 21.8378C15.2051 21.8378 15.5836 21.8258 16.8491 21.768C18.0196 21.7145 18.6545 21.5193 19.0778 21.3545C19.6375 21.1364 20.0378 20.8778 20.4578 20.4578C20.856 20.0705 21.1625 19.5982 21.3545 19.0778C21.5193 18.6545 21.7145 18.0196 21.768 16.8491C21.8258 15.5836 21.8378 15.204 21.8378 12C21.8378 8.796 21.8258 8.41636 21.768 7.15091C21.7145 5.98036 21.5193 5.34545 21.3545 4.92218C21.1364 4.36255 20.8778 3.96218 20.4578 3.54218C20.0705 3.14408 19.5989 2.83768 19.0778 2.64545C18.6545 2.48073 18.0196 2.28545 16.8491 2.232ZM10.4673 15.6993C11.3233 16.0556 12.2764 16.1037 13.1639 15.8353C14.0514 15.567 14.8182 14.9988 15.3334 14.2279C15.8485 13.457 16.0801 12.5311 15.9884 11.6085C15.8968 10.6858 15.4876 9.82361 14.8309 9.16909C14.4123 8.7507 13.906 8.43034 13.3487 8.23107C12.7914 8.0318 12.1968 7.95857 11.6078 8.01667C11.0188 8.07477 10.45 8.26274 9.94233 8.56705C9.43468 8.87136 9.00081 9.28445 8.67197 9.77656C8.34312 10.2687 8.12748 10.8276 8.04056 11.413C7.95365 11.9985 7.99762 12.596 8.16932 13.1624C8.34101 13.7288 8.63616 14.2501 9.03351 14.6888C9.43087 15.1275 9.92054 15.4726 10.4673 15.6993ZM7.63854 7.63854C8.2113 7.06579 8.89126 6.61146 9.6396 6.30148C10.3879 5.99151 11.19 5.83197 12 5.83197C12.81 5.83197 13.6121 5.99151 14.3604 6.30148C15.1087 6.61146 15.7887 7.06579 16.3615 7.63854C16.9342 8.2113 17.3885 8.89126 17.6985 9.6396C18.0085 10.3879 18.168 11.19 18.168 12C18.168 12.81 18.0085 13.6121 17.6985 14.3604C17.3885 15.1087 16.9342 15.7887 16.3615 16.3615C15.2047 17.5182 13.6359 18.168 12 18.168C10.3641 18.168 8.79527 17.5182 7.63854 16.3615C6.48181 15.2047 5.83197 13.6359 5.83197 12C5.83197 10.3641 6.48181 8.79527 7.63854 7.63854ZM19.536 6.75055C19.6779 6.61666 19.7916 6.45565 19.8701 6.27706C19.9487 6.09847 19.9907 5.90593 19.9935 5.71083C19.9964 5.51574 19.9601 5.32205 19.8867 5.14125C19.8134 4.96044 19.7045 4.79619 19.5665 4.65822C19.4285 4.52026 19.2643 4.41137 19.0835 4.33802C18.9027 4.26467 18.709 4.22834 18.5139 4.23118C18.3188 4.23403 18.1263 4.27599 17.9477 4.35458C17.7691 4.43317 17.6081 4.54679 17.4742 4.68873C17.2138 4.96476 17.0712 5.3314 17.0768 5.71083C17.0823 6.09026 17.2355 6.45259 17.5038 6.72092C17.7721 6.98924 18.1345 7.14243 18.5139 7.14796C18.8933 7.15349 19.26 7.01093 19.536 6.75055Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6421_102122">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="relative w-[126px] [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
                      Instagram
                    </div>
                  </div>
                  <Input
                    placeholder="Enter Instagram Account"
                    className="w-[360px] h-[48px] px-4 py-2 bg-white rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Actions */}
        <div className="flex items-center justify-end gap-4 w-full mt-[20px] ">
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

          <Button
            onClick={handleNext}
            className="w-[200px] h-10 bg-secondary-dark rounded-[20px] px-4 py-2.5"
          >
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              Next
            </span>
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
