import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../../components/ui/dialoge";
interface DeleteProps {
  title: string;
  children: React.ReactNode;
}

export const Delete = ({ title, children } : DeleteProps): JSX.Element => {
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
                  fill="#FEE4E2"
                />
                <rect
                  x="4"
                  y="4"
                  width="48"
                  height="48"
                  rx="24"
                  stroke="#FEF3F2"
                  stroke-width="8"
                />
                <path
                  d="M32 22V21.2C32 20.0799 32 19.5198 31.782 19.092C31.5903 18.7157 31.2843 18.4097 30.908 18.218C30.4802 18 29.9201 18 28.8 18H27.2C26.0799 18 25.5198 18 25.092 18.218C24.7157 18.4097 24.4097 18.7157 24.218 19.092C24 19.5198 24 20.0799 24 21.2V22M26 27.5V32.5M30 27.5V32.5M19 22H37M35 22V33.2C35 34.8802 35 35.7202 34.673 36.362C34.3854 36.9265 33.9265 37.3854 33.362 37.673C32.7202 38 31.8802 38 30.2 38H25.8C24.1198 38 23.2798 38 22.638 37.673C22.0735 37.3854 21.6146 36.9265 21.327 36.362C21 35.7202 21 34.8802 21 33.2V22"
                  stroke="#D92D20"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                <DialogTitle className=" font-semibold leading-[28px] tracking-[0] text-lg text-[#181D27]">
                  Delete { title } ?
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

              <Button className="bg-[#D92D20] border-[#D92D20] flex items-center justify-center gap-2 px-[18px] py-2.5 relative flex-1 grow rounded-[40px] overflow-hidden shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] h-auto">
                <span className="w-fit font-semibold leading-[24px] tracking-[0] text-base text-background-primary">
                  Delete
                </span>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
