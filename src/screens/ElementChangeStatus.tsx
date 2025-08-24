import { BellIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialoge";

export const ElementChangeStatus = (): JSX.Element => {
  return (
    <div className="flex w-[1440px] h-[1054px] items-center justify-center relative bg-[#b7b1a840]">
      <Dialog open={true}>
        <DialogContent className="flex flex-col w-[400px] items-center bg-base-white rounded-2xl overflow-hidden shadow-shadow-xl border-0 p-0">
          <DialogHeader className="items-center bg-base-white flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-4 pt-6 pb-0 px-6 relative self-stretch w-full flex-[0_0_auto] bg-base-white">
              <div className="relative w-14 h-14 mt-[-4.00px] ml-[-4.00px] bg-[#fee3e1] rounded-[28px] border-8 border-solid border-[#fef2f1]">
                <BellIcon className="absolute w-6 h-6 top-3 left-3 text-[#d92c20]" />
              </div>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <DialogTitle className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#181d27] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                  Change Status?
                </DialogTitle>

                <DialogDescription className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#535861] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                  Are you sure you want to Change Status this User?
                </DialogDescription>
              </div>
            </div>

            <div className="inline-flex items-center justify-center p-2.5 absolute top-4 left-[340px] rounded-lg overflow-hidden">
              <XIcon className="relative w-6 h-6 text-gray-400" />
            </div>
          </DialogHeader>

          <div className="items-start pt-8 pb-0 px-0 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-3 pt-0 pb-6 px-6 relative self-stretch w-full flex-[0_0_auto]">
              <Button
                variant="outline"
                className="flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow bg-base-white rounded-[40px] overflow-hidden border border-solid border-[#d5d6d9] shadow-shadow-xs h-auto"
              >
                <span className="text-[#414651] relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                  Cancel
                </span>
              </Button>

              <Button
                variant="destructive"
                className="flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow bg-[#d92c20] rounded-[40px] overflow-hidden border border-solid shadow-shadow-xs h-auto"
              >
                <span className="text-base-white relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                  Change
                </span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
