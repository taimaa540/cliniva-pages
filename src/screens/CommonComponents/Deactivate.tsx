import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialoge";

interface DeactivateProps {
  children : React.ReactNode;
}
export const Deactivate = ({children} : DeactivateProps): JSX.Element => {
  return (
    <div className="flex w-[1440px] h-[1086px] items-center justify-center relative bg-[#b7b1a840]">
      <Dialog open={true}>
        <DialogContent className="w-[500px] bg-primary-foreground rounded-[16px] shadow-[0px_8px_8px_-4px_rgba(10,13,18,0.04)] shadow-[0px_20px_24px_-4px_rgba(10,13,18,0.10)] border-0 p-0">
          <div className="relative">
            <DialogHeader className="flex-col gap-4 pt-6 pb-0 px-6 flex items-start relative">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  fill="#FFEED6"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FFF6E9"
                  stroke-width="8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28 22.75C28.4142 22.75 28.75 23.0858 28.75 23.5V28.75C28.75 29.1642 28.4142 29.5 28 29.5C27.5858 29.5 27.25 29.1642 27.25 28.75V23.5C27.25 23.0858 27.5858 22.75 28 22.75Z"
                  fill="#FF9500"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M31.4208 18.25C31.6163 18.2495 31.8099 18.2875 31.9908 18.3618C32.1721 18.4362 32.3369 18.5457 32.4759 18.684L32.4772 18.6853L37.316 23.5241C37.4543 23.6631 37.5638 23.8279 37.6382 24.0092C37.7125 24.1901 37.7505 24.3838 37.75 24.5793L37.75 24.5808L37.75 24.5781V24.5793V31.3952C37.75 31.793 37.592 32.1745 37.3107 32.4559L32.4558 37.3107C32.1745 37.592 31.793 37.75 31.3952 37.75H24.5607C24.1628 37.75 23.7813 37.592 23.5 37.3107L18.6893 32.5C18.408 32.2187 18.25 31.8372 18.25 31.4393V24.5262C18.25 24.1256 18.4102 23.7417 18.695 23.46L23.5221 18.6837C23.8029 18.4059 24.182 18.25 24.5771 18.25H31.4208ZM31.4206 19.75L36.25 24.5794V31.3952L31.3952 36.25H24.5607L19.75 31.4393V24.5262L24.5771 19.75H31.4206Z"
                  fill="#FF9500"
                />
                <path
                  d="M28 33.25C28.6213 33.25 29.125 32.7463 29.125 32.125C29.125 31.5037 28.6213 31 28 31C27.3787 31 26.875 31.5037 26.875 32.125C26.875 32.7463 27.3787 33.25 28 33.25Z"
                  fill="#FF9500"
                />
              </svg>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <DialogTitle className=" font-semibold leading-[28px] tracking-[0] text-lg text-[#181D27]">
                  Change status to Inactive?
                </DialogTitle>

                <DialogDescription className="relative self-stretch font-regular text-sm leading-[20px] tracking-[0] text-[#535862]">
                  {children}
                </DialogDescription>
              </div>
            </DialogHeader>
          </div>

          <div className="items-start pt-8 pb-0 px-0 self-stretch w-full flex-[0_0_auto] flex flex-col relative">
            <div className="gap-3 pt-0 pb-6 px-6 flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <Button
                variant="outline"
                className="bg-primary-foreground border border-border-light flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow rounded-[40px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-auto"
              >
                <span className="w-fit font-semibold leading-[24px] tracking-[0] text-base text-text-primary">
                  Cancel
                </span>
              </Button>

              <Button className="bg-[#FF9500] border-[#ff9500] flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow rounded-[40px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-auto">
                <span className="w-fit font-semibold leading-[24px] tracking-[0] text-base text-background-primary">
                  Confirm
                </span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
