import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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

export const AccountCreationSectionMobile = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className=" flex flex-col w-full min-h-screen overflow-scroll items-start gap-4 pl-0 pr-4 py-4">
      <div className="flex flex-col items-start justify-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-center justify-between pl-1 pr-0 py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-[340px] items-start gap-1.5 px-0 py-0.5 relative">
            <h1 className="relative self-stretch font-h5-22px-bold font-[number:var(--h5-22px-bold-font-weight)] text-on-surface-primary text-[length:var(--h5-22px-bold-font-size)] tracking-[var(--h5-22px-bold-letter-spacing)] leading-[var(--h5-22px-bold-line-height)] [font-style:var(--h5-22px-bold-font-style)]">
              Create Your Account
            </h1>
          </div>
        </div>
      </div>
      <Card className=" w-full h-full bg-background-secondary rounded-[16px] overflow-scroll border-0">
        <CardContent className="p-5">
          <div className="grid gap-[32px] w-full max-w-[1161px]">
            {formFields.map((field) => (
              <div key={field.id} className="flex flex-col items-start gap-8">
                <Label
                  htmlFor={field.id}
                  className="w-full font-lato font-medium text-on-surface-primary text-base tracking-[0] leading-[100%]"
                >
                  {field.label}
                </Label>
                {field.type === "password" ? (
                  <div className="relative w-full">
                    <Input
                      id={field.id}
                      type={showPassword ? "text" : "password"}
                      placeholder={field.placeholder}
                      className="w-full h-12 px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
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
                    className="w-full h-12 px-4 py-2 bg-surface-primary rounded border border-solid border-[#e4e2dd] [font-family:'Lato',Helvetica] font-normal text-on-surface-secondary text-base tracking-[0] leading-6"
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
