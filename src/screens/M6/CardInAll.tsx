import { Card, CardContent } from "../../components/ui/card";

type MyComponentProps = {
  className?: string; // 👈 نجعلها اختيارية
};
export const CardInAll = ({ className }: MyComponentProps): JSX.Element => {
  return (
    <Card className={`w-full h-[34px] max-[991px]:h-[68px] rounded-[6px] border-0 relative z-1 ${className}`}>
      <CardContent className="p-[4px] flex flex-col gap-[4px]">
        <div className="flex gap-[4px] max-[767px]:flex-col max-[767px]:items-center">
          <div className="flex items-center gap-[4px]">
            <img
              alt="Place image here"
              src="/23.png"
              className="max-[767px]:hidden"
            />
            <div className="font-lato font-regular text-[10px] max-[767px]:text-[9px] leading-[135%] tracking-[0] text-background-primary">
              Sarah Miller
            </div>
          </div>
          <div className="flex items-center gap-[4px]">
            <svg
              className="max-[767px]:hidden"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.125 1.25H1.875C1.70924 1.25 1.55027 1.31585 1.43306 1.43306C1.31585 1.55027 1.25 1.70924 1.25 1.875V8.125C1.25 8.29076 1.31585 8.44973 1.43306 8.56694C1.55027 8.68415 1.70924 8.75 1.875 8.75H8.125C8.29076 8.75 8.44973 8.68415 8.56694 8.56694C8.68415 8.44973 8.75 8.29076 8.75 8.125V1.875C8.75 1.70924 8.68415 1.55027 8.56694 1.43306C8.44973 1.31585 8.29076 1.25 8.125 1.25ZM3.75 4.6875C3.75 4.44027 3.82331 4.1986 3.96066 3.99304C4.09801 3.78748 4.29324 3.62726 4.52165 3.53265C4.75005 3.43804 5.00139 3.41329 5.24386 3.46152C5.48634 3.50975 5.70907 3.6288 5.88388 3.80362C6.0587 3.97843 6.17775 4.20116 6.22598 4.44364C6.27421 4.68611 6.24946 4.93745 6.15485 5.16585C6.06024 5.39426 5.90002 5.58949 5.69446 5.72684C5.4889 5.86419 5.24723 5.9375 5 5.9375C4.66848 5.9375 4.35054 5.8058 4.11612 5.57138C3.8817 5.33696 3.75 5.01902 3.75 4.6875ZM2.68242 8.125C2.84234 7.73131 3.09943 7.38457 3.42969 7.11719C3.87434 6.75824 4.42855 6.56247 5 6.56247C5.57145 6.56247 6.12566 6.75824 6.57031 7.11719C6.90057 7.38457 7.15766 7.73131 7.31758 8.125H2.68242ZM8.125 8.125H7.98164C7.84269 7.68268 7.60695 7.27688 7.29153 6.93707C6.97612 6.59727 6.58897 6.332 6.1582 6.16055C6.46487 5.91967 6.6888 5.58917 6.79882 5.21506C6.90885 4.84094 6.89949 4.44183 6.77205 4.07329C6.64462 3.70474 6.40544 3.3851 6.08783 3.15886C5.77021 2.93262 5.38996 2.81103 5 2.81103C4.61004 2.81103 4.22979 2.93262 3.91217 3.15886C3.59456 3.3851 3.35538 3.70474 3.22795 4.07329C3.10051 4.44183 3.09115 4.84094 3.20118 5.21506C3.3112 5.58917 3.53513 5.91967 3.8418 6.16055C3.41103 6.332 3.02388 6.59727 2.70847 6.93707C2.39305 7.27688 2.15731 7.68268 2.01836 8.125H1.875V1.875H8.125V8.125Z"
                fill="#FFFDFC"
              />
            </svg>
            <div className="font-lato font-regular text-[10px] max-[767px]:text-[9px] leading-[135%] tracking-[0] text-background-primary">
              PAT-df4c3
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[4px]">
          <svg
          className="max-[767px]:hidden"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_9089_97419)">
              <path
                d="M6.47363 5.23772C7.79063 3.56772 7.43496 1.91172 6.48896 1.33139C5.59496 0.783053 4.81463 1.00405 4.34596 1.35605L4.0013 1.61405M6.47363 5.23772C6.15763 5.63872 5.7453 6.04005 5.2213 6.42772C4.7063 6.80939 4.44863 7.00005 4.0013 7.00005C3.55396 7.00005 3.29663 6.80939 2.7813 6.42772C0.0752958 4.42505 0.340629 2.05105 1.51363 1.33139C2.40763 0.783053 3.18796 1.00405 3.65663 1.35605L4.0013 1.61405M6.47363 5.23772L4.63196 3.14839C4.59539 3.10705 4.54535 3.08001 4.49073 3.07207C4.43611 3.06414 4.38045 3.07583 4.33363 3.10505L3.60496 3.56039C3.46207 3.65079 3.28975 3.68243 3.12406 3.64868C2.95837 3.61493 2.81215 3.51842 2.716 3.37933C2.61984 3.24025 2.5812 3.06936 2.60816 2.90243C2.63511 2.73551 2.72558 2.58547 2.86063 2.48372L4.0013 1.61405"
                stroke="#FFFDFC"
                stroke-width="0.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_9089_97419">
                <rect width="8" height="8" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="font-lato font-regular text-[10px] max-[767px]:text-[9px] max-[767px]:text-center leading-[135%] tracking-[0] text-background-primary">
            Facial Rejuvenation
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
