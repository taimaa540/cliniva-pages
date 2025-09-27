import { ArrowLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { CardContent } from "../../components/ui/card"; 
import { Card } from "../../components/ui/card"; 
import { Input } from "../../components/ui/input"; 
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const formFields = [
  {
    id: "email",
    label: "Email*",
    placeholder: "Enter Email",
    type: "email",
  },
  {
    id: "username",
    label: "User Name*",
    placeholder: "Enter User Name",
    type: "text",
  },
  {
    id: "password",
    label: "Password*",
    placeholder: "Enter Password",
    type: "password",
  },
  {
    id: "confirmPassword",
    label: "Confirm Password*",
    placeholder: "Enter Password",
    type: "password",
  },
];
interface buttonProps {
  handleNext: () => void;
}

export const AccountCreationSection = ({
  handleNext,
}: buttonProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col w-full min-h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      <div className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between pl-1 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5 relative">
            <button className="inline-flex items-center gap-1.5 relative flex-[0_0_auto] cursor-pointer">
              <Link to='/ChossPlan'>
              <ArrowLeftIcon className="relative w-4 h-4" />
              </Link>
              <div className="relative w-fit mt-[-1.00px] font-title-12px-regular font-[number:var(--title-12px-regular-font-weight)] text-on-surface-secondary text-[length:var(--title-12px-regular-font-size)] tracking-[var(--title-12px-regular-letter-spacing)] leading-[var(--title-12px-regular-line-height)] whitespace-nowrap [font-style:var(--title-12px-regular-font-style)]">
                Back to Choosing Plan Page
              </div>
            </button>

            <h1 className="relative self-stretch font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              Create Your Account
            </h1>
          </div>
        </div>
      </div>

      <Card className=" w-full h-full  bg-background-secondary rounded-[16px] overflow-hidden border-0">
        <CardContent className="p-5">
          <div className="grid grid-cols-2 gap-[32px] w-full max-w-[1161px]">
            {formFields.map((field) => (
              <div key={field.id} className="flex items-center gap-8">
                <Label
                  htmlFor={field.id}
                  className="w-[160px] font-lato font-medium text-on-surface-primary text-base tracking-[0] leading-[100%]"
                >
                  {field.label}
                </Label>
                {field.type === "password" ? (
                  <div className="relative w-full">
                    <Input
                      id={field.id}
                      type={showPassword ? "text" : "password"}
                      placeholder={field.placeholder}
                      className="w-[360px] h-12 px-4 py-2 ml-[42px] bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                ) : (
                  <Input
                    id={field.id}
                    placeholder={field.placeholder}
                    className="w-[360px] h-12 px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                )}
              </div>
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="absolute bottom-[60px] right-9 w-[200px] h-10 bg-secondary-dark hover:bg-secondary-dark/90 rounded-[20px] px-4 py-2.5 h-auto"
          >
            <span className="font-btn-14px-medium font-[number:var(--btn-14px-medium-font-weight)] text-surface-default text-[length:var(--btn-14px-medium-font-size)] tracking-[var(--btn-14px-medium-letter-spacing)] leading-[var(--btn-14px-medium-line-height)] [font-style:var(--btn-14px-medium-font-style)]">
              Next
            </span>
            <ChevronRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
