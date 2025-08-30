import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

const navigationItems = [
  {
    id: "users",
    label: "UsersIcon Management",
    icon: "/icon-users.svg",
    hasSubmenu: false,
  },
  {
    id: "medical-facilities",
    label: "Medical Facilities",
    icon: "/healthicons-hospital-outline.svg",
    hasSubmenu: true,
    isExpanded: true,
    submenuItems: [
      { label: "Company Details", isActive: true },
      { label: "Complexes List", isActive: false },
      { label: "Clinics List", isActive: false },
    ],
  },
  {
    id: "doctors-staff",
    label: "Doctors & Staff",
    icon: "/la-users.svg",
    hasSubmenu: true,
    isExpanded: false,
  },
  {
    id: "services",
    label: "Services Management",
    icon: "/hugeicons-service.svg",
    hasSubmenu: false,
  },
  {
    id: "patients",
    label: "Paitients Management",
    icon: "/icon-nav-usersquare.svg",
    hasSubmenu: false,
  },
  {
    id: "appointments",
    label: "Appointments Management",
    icon: "/icon-nav-calendardots.svg",
    hasSubmenu: false,
  },
];

export const ContactInformationSection = (): JSX.Element => {
  return (
    <>
    <div className="flex h-screen">
      {/* السايد بار */}
      <aside className="w-56 bg-surface-default flex flex-col h-full">
        {/* الهيدر */}
        <div className="flex items-center gap-[7px]">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 13V15H15V0H13V1C13 7.62742 7.62742 13 1 13H0Z"
              fill="#A5C8F2"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 15H15V30H17.1322C18.0228 23.3156 23.3156 18.0228 30 17.1322V15Z"
              fill="#83DFDF"
            />
          </svg>
          <h1>
            Cliniva SYS
          </h1>
        </div>

        {/* الناف */}
        <nav className="flex-1 px-2 py-2 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <div key={item.id}>
                {item.hasSubmenu ? (
                  <Collapsible defaultOpen={item.isExpanded}>
                    <div className="flex flex-col bg-bg-subtle rounded-[14px]">
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-10 justify-between px-1 py-2 bg-app-secondary rounded text-surface-default hover:bg-app-secondary/90"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              className="w-5 h-5"
                              alt={item.label}
                              src={item.icon}
                            />
                            <span className="font-[number:var(--title-12px-bold-font-weight)] text-[length:var(--title-12px-bold-font-size)] leading-[var(--title-12px-bold-line-height)] font-title-12px-bold tracking-[var(--title-12px-bold-letter-spacing)] [font-style:var(--title-12px-bold-font-style)]">
                              {item.label}
                            </span>
                          </div>
                          {item.isExpanded ? (
                            <img
                              className="w-3.5 h-3.5"
                              alt="Icon caretup"
                              src="/icon-caretup.svg"
                            />
                          ) : (
                            <img
                              className="w-3.5 h-3.5"
                              alt="Icon caretdown"
                              src="/icon-caretdown-3.svg"
                            />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="flex flex-col">
                          {item.submenuItems?.map((subItem, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              className="h-10 justify-start px-7 py-2 rounded-xl hover:bg-gray-100"
                            >
                              <span
                                className={`font-[number:var(--title-12px-regular-font-weight)] text-[length:var(--title-12px-regular-font-size)] leading-[var(--title-12px-regular-line-height)] font-title-12px-regular tracking-[var(--title-12px-regular-letter-spacing)] [font-style:var(--title-12px-regular-font-style)] ${
                                  subItem.isActive
                                    ? "text-app-secondary"
                                    : "text-on-surface-secondary"
                                }`}
                              >
                                {subItem.label}
                              </span>
                            </Button>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </div>
                  </Collapsible>
                ) : (
                  <Button
                    variant="ghost"
                    className="h-10 justify-between px-1 py-2 rounded-[14px] hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className="w-5 h-5"
                        alt={item.label}
                        src={item.icon}
                      />
                      <span className="font-[number:var(--title-12px-semibold-font-weight)] text-on-surface-secondary text-[length:var(--title-12px-semibold-font-size)] font-title-12px-semibold tracking-[var(--title-12px-semibold-letter-spacing)] leading-[var(--title-12px-semibold-line-height)] [font-style:var(--title-12px-semibold-font-style)]">
                        {item.label}
                      </span>
                    </div>
                    {item.id === "doctors-staff" && (
                      <img
                        className="w-3.5 h-3.5"
                        alt="Icon caretdown"
                        src="/icon-caretdown-3.svg"
                      />
                    )}
                  </Button>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* اللوج آوت */}
        <div className="px-2 pb-4">
          <Button
            variant="ghost"
            className="w-full h-11 justify-between px-4 py-3 bg-bg rounded-[14px] hover:bg-bg/90"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-5 h-5"
                alt="Icon nav signout"
                src="/icon-nav-signout.svg"
              />
              <span className="font-[number:var(--btn-14px-medium-font-weight)] text-on-surface-secondary text-[length:var(--btn-14px-medium-font-size)] leading-[var(--btn-14px-medium-line-height)] font-btn-14px-medium tracking-[var(--btn-14px-medium-letter-spacing)] [font-style:var(--btn-14px-medium-font-style)]">
                Logout
              </span>
            </div>
            <img
              className="w-3.5 h-3.5"
              alt="Icon caretdown"
              src="/icon-caretdown-3.svg"
            />
          </Button>
        </div>
      </aside>

      {/* الكونتنت */}
      <main className="flex-1 p-4 overflow-y-auto">
        {/* محتوى الصفحة هون */}
      </main>
    </div>
    </>
  );
};
