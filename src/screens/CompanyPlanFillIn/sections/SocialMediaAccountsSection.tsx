import {
  ChevronDownIcon,
  ChevronRightIcon,
  ImagePlusIcon,
  UserCircleIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";

export const SocialMediaAccountsSection = (): JSX.Element => {
  const stepData = [
    {
      number: 1,
      title: "Fill in Company Details",
      items: [
        { text: "Company Overview", color: "text-secondary-dark" },
        { text: "Contact Details", color: "text-primary-dark" },
        { text: "Legal Details", color: "text-on-surface-secondary" },
      ],
      isActive: true,
    },
    {
      number: 2,
      title: "Fill in Complex Details",
      items: [
        { text: "Complex Overview", color: "text-on-surface-secondary" },
        { text: "Contact Details", color: "text-on-surface-secondary" },
        { text: "Working Schedule", color: "text-on-surface-secondary" },
      ],
      isActive: false,
    },
    {
      number: 3,
      title: "Fill in Clinic Details",
      items: [
        { text: "Clinic Overview", color: "text-on-surface-secondary" },
        { text: "Working Schedule", color: "text-on-surface-secondary" },
      ],
      isActive: false,
    },
  ];

  const stepConnectors = [
    { color: "bg-secondary-dark" },
    { color: "bg-primary-dark" },
    { color: "bg-on-surface-tertiary" },
    { color: "bg-on-surface-tertiary" },
    { color: "bg-on-surface-tertiary" },
    { color: "bg-on-surface-tertiary" },
    { color: "bg-on-surface-tertiary" },
    { color: "bg-on-surface-tertiary" },
    { color: "bg-on-surface-tertiary" },
  ];

  return (
    <div className="flex w-full bg-surface-default">
      <aside className="w-[223px] bg-surface-default">
        <div className="flex flex-col w-[183px] items-start gap-2.5 px-2 py-[9px] mt-4 ml-5">
          <div className="flex items-center gap-[7px] h-8">
            <img className="w-[30px] h-[30px]" alt="Symbol" src="/symbol.svg" />
            <div className="[font-family:'Lato',Helvetica] font-normal text-[#2a2b2a] text-xl tracking-[0] leading-[22px] whitespace-nowrap">
              Cliniva SYS
            </div>
          </div>
        </div>

        <div className="flex flex-col w-[201px] items-start gap-4 mt-[106px] ml-5">
          <div className="flex items-center gap-2">
            <UserCircleIcon className="w-6 h-6" />
            <div className="[font-family:'Lato',Helvetica] font-semibold text-secondary-dark text-sm tracking-[0] leading-[17.5px] whitespace-nowrap">
              Account Setup
            </div>
          </div>

          <div className="flex items-start justify-center gap-2 w-full">
            <div className="flex flex-col w-[33px] h-[409px] items-start justify-between px-[3px] py-2 bg-bg rounded-[109px]">
              {stepData.map((step, stepIndex) => (
                <div
                  key={step.number}
                  className="flex flex-col w-[26px] items-center gap-4"
                >
                  <div className="w-[26px] h-[26px] rotate-90">
                    <div
                      className={`w-[26px] h-[26px] rounded-[13px] ${step.isActive ? "bg-app-primary" : "bg-white"}`}
                    >
                      <div
                        className={`absolute w-1.5 top-[7px] left-2 -rotate-90 [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0] leading-[18px] whitespace-nowrap ${step.isActive ? "text-white" : "text-on-surface-primary"}`}
                      >
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {stepIndex < stepData.length - 1 && (
                    <div className="flex flex-col items-start gap-[23px]">
                      {stepConnectors
                        .slice(stepIndex * 3, (stepIndex + 1) * 3)
                        .map((connector, connectorIndex) => (
                          <div
                            key={connectorIndex}
                            className={`${connector.color} w-2.5 h-2.5 rounded-[40px] rotate-90`}
                          />
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col w-40 h-[333px] items-center gap-6">
              {stepData.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col w-40 items-start gap-[3px]"
                >
                  <div className="[font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-sm tracking-[0] leading-10">
                    {step.title}
                  </div>
                  <div className="flex flex-col items-start gap-2 w-full">
                    {step.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center justify-center gap-2.5 w-full"
                      >
                        <div
                          className={`flex-1 [font-family:'Lato',Helvetica] font-normal text-xs tracking-[0] leading-6 ${item.color}`}
                        >
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 bg-bg-subtle rounded-2xl overflow-hidden ml-[223px]">
        <div className="flex flex-col items-start justify-center gap-4 px-6 py-6">
          <div className="flex items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
              Logo*
            </div>
            <Card className="w-[504px] h-16 bg-white border border-[#e4e2dd] rounded">
              <CardContent className="flex items-center justify-center gap-[8.19px] h-full p-4">
                <ImagePlusIcon className="w-[30.71px] h-[30.71px]" />
                <div className="flex flex-col w-[289px] items-start gap-2">
                  <div className="[font-family:'Lato',Helvetica] font-semibold text-sm text-center tracking-[0] leading-[21px]">
                    <span className="text-[#69a3e9]">Click or Drag</span>
                    <span className="text-[#414651]">
                      {" "}
                      file to this area to upload
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex w-[688px] h-12 items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
              Company Name*
            </div>
            <div className="flex items-center gap-4">
              <Input
                className="w-[244px] px-4 py-2 bg-white border border-[#e4e2dd] rounded"
                placeholder="Enter Trade Name"
              />
              <Input
                className="w-[244px] px-4 py-2 bg-white border border-[#e4e2dd] rounded"
                placeholder="Enter Legal Name"
              />
            </div>
          </div>

          <div className="flex h-12 items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-gray-700 text-base tracking-[0] leading-4">
              Year of Establishment
            </div>
            <div className="flex flex-col w-[504px] h-12 items-center justify-center px-4 py-2 bg-white rounded border border-[#e4e2dd]">
              <div className="flex items-center justify-between w-full">
                <div className="[font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6">
                  Select Date
                </div>
                <div className="flex-1 bg-[url(/union.svg)] bg-[100%_100%] h-full" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
              Overview
            </div>
            <div className="flex flex-col w-[504px] items-start relative">
              <Textarea
                className="w-full h-16 px-4 py-2 bg-white border border-[#e4e2dd] rounded resize-none"
                placeholder="Enter Overview"
              />
              <img
                className="absolute w-2 h-2 bottom-2 right-3"
                alt="Resizer"
                src="/resizer.svg"
              />
            </div>
          </div>

          <div className="flex w-[696px] items-center justify-between">
            <div className="font-title-18px-semibold font-[number:var(--title-18px-semibold-font-weight)] text-[#000000] text-[length:var(--title-18px-semibold-font-size)] tracking-[var(--title-18px-semibold-letter-spacing)] leading-[var(--title-18px-semibold-line-height)] [font-style:var(--title-18px-semibold-font-style)]">
              Company Overview
            </div>
            <ChevronDownIcon className="w-8 h-8" />
          </div>

          <div className="flex items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
              Vision
            </div>
            <div className="flex flex-col w-[504px] items-start relative">
              <Textarea
                className="w-full h-16 px-4 py-2 bg-white border border-[#e4e2dd] rounded resize-none"
                placeholder="Enter Vision"
              />
              <img
                className="absolute w-2 h-2 bottom-2 right-3"
                alt="Resizer"
                src="/resizer.svg"
              />
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
              Goals
            </div>
            <div className="flex flex-col w-[504px] items-start relative">
              <Textarea
                className="w-full h-16 px-4 py-2 bg-white border border-[#e4e2dd] rounded resize-none"
                placeholder="Enter Goals"
              />
              <img
                className="absolute w-2 h-2 bottom-2 right-3"
                alt="Resizer"
                src="/resizer.svg"
              />
            </div>
          </div>

          <div className="flex w-[688px] h-12 items-center gap-8">
            <div className="w-40 [font-family:'Lato',Helvetica] font-medium text-on-surface-primary text-base tracking-[0] leading-4">
              CEO Name*
            </div>
            <div className="flex items-center gap-4">
              <Input
                className="w-[244px] px-4 py-2 bg-white border border-[#e4e2dd] rounded"
                placeholder="Enter First Name"
              />
              <Input
                className="w-[244px] px-4 py-2 bg-white border border-[#e4e2dd] rounded"
                placeholder="Enter Last Name"
              />
            </div>
          </div>
        </div>

        <div className="flex w-[696px] items-center gap-4 mt-[838px] ml-6 mb-6">
          <Button
            variant="outline"
            className="w-[340px] h-auto px-4 py-2.5 rounded-[20px] border-2 border-[#e4e2dd]"
          >
            <div className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-primary text-[length:var(--btn-14px-medium-font-size)] text-center tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              Previous
            </div>
          </Button>

          <Button
            asChild
            className="w-[340px] h-auto px-4 py-2.5 bg-secondary-dark rounded-[20px]"
          >
            <Link to="/company-planu45-fill-in-company-details-u45-desktop">
              <div className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] text-center tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
                Next
              </div>
              <ChevronRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </Button>

          <img
            className="absolute w-[5px] h-[9px] top-4 left-32"
            alt="Vector stroke"
            src="/vector--stroke-.svg"
          />
        </div>
      </main>
    </div>
  );
};
