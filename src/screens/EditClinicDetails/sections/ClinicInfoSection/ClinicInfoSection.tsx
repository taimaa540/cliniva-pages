import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const ClinicInfoSection = (): JSX.Element => {
  return (
    <div className="flex h-screen bg-background-primary" style={{  padding: "10px" }}>
      {/* السايدبار */}
      <aside className="w-56 flex flex-col h-full bg-background-primary">
        
        {/* الهيدر */}
        <div style={{ paddingLeft: "15px" }} className="flex items-center gap-[7px]">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M0 13V15H15V0H13V1C13 7.6 7.6 13 1 13H0Z" fill="#A5C8F2" />
            <path d="M30 15H15V30H17.1C18 23.3 23.3 18 30 17.1V15Z" fill="#83DFDF" />
          </svg>
          <h1 className="text-text-primary">Cliniva SYS</h1>
        </div>

        {/* الناف */}
        <nav className="flex-1 px-2 py-2 overflow-y-auto">
          <div className="flex flex-col gap-2">
            
            {/* مثال: Users */}
            <Button
              variant="ghost"
              className="h-10 justify-start gap-2 px-2 rounded-[14px] hover:bg-gray-100"
            >
              <img src="/user.svg" alt="Users" className="w-5 h-5" />
              <span>Users Management</span>
            </Button>

            {/* مثال: Medical Facilities مع Submenu */}
            <Collapsible defaultOpen>
              <div className="flex flex-col bg-bg-subtle rounded-[14px]">
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="h-10 justify-between px-2 py-2 bg-app-secondary rounded text-surface-default hover:bg-app-secondary/90"
                  >
                    <div className="flex items-center gap-2">
                      <img src="/ddd.svg" className="w-5 h-5" />
                      <span>Medical Facilities</span>
                    </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.19064 5.37814C3.3615 5.20729 3.6385 5.20729 3.80936 5.37814L7 8.56878L10.1906 5.37814C10.3615 5.20729 10.6385 5.20729 10.8094 5.37814C10.9802 5.549 10.9802 5.826 10.8094 5.99686L7.30936 9.49686C7.1385 9.66771 6.8615 9.66771 6.69064 9.49686L3.19064 5.99686C3.01979 5.826 3.01979 5.549 3.19064 5.37814Z" fill="#717680"/>
</svg>

                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col">
                    <Button
                      variant="ghost"
                      className="h-10 justify-start px-7 py-2 rounded-xl hover:bg-gray-100 "
                    >
                      Company Details
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 justify-start px-7 py-2 rounded-xl hover:bg-gray-100 text-app-secondary"
                    >
                      Complexes List
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 justify-start px-7 py-2 rounded-xl hover:bg-gray-100"
                    >
                      Clinics List
                    </Button>
                  </div>
                </CollapsibleContent>
              </div>
            </Collapsible>

            {/* Doctors & Staff */}
            <Button
              variant="ghost"
              className="h-10 justify-start gap-2 px-2 rounded-[14px] hover:bg-gray-100"
            >
              <img src="doctorss.svg" alt="Doctors" className="w-5 h-5" />
              <span>Doctors & Staff</span>
            </Button>

            {/* Services */}
            <Button
              variant="ghost"
              className="h-10 justify-start gap-2 px-2 rounded-[14px] hover:bg-gray-100"
            >
              <img src="/service.svg" alt="Services" className="w-5 h-5" />
              <span>Services Management</span>
            </Button>

            {/* Patients */}
            <Button
              variant="ghost"
              className="h-10 justify-start gap-2 px-2 rounded-[14px] hover:bg-gray-100"
            >
              <img src="/dddd.svg" alt="Patients" className="w-5 h-5" />
              <span>Patients Management</span>
            </Button>

            {/* Appointments */}
            <Button
              variant="ghost"
              className="h-10 justify-start gap-2 px-2 rounded-[14px] hover:bg-gray-100"
            >
              <img src="/apoentmant.svg" alt="Appointments" className="w-5 h-5" />
              <span>Appointments Management</span>
            </Button>
          </div>
        </nav>

        {/* اللوج آوت */}
        <div className="px-2 pb-4">
          <Button
            variant="ghost"
            className="w-full h-11 justify-between px-4 py-3 bg-bg rounded-[14px] hover:bg-bg/90"
          >
            <div className="flex items-center gap-3">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1518 4.27681C11.3959 4.03273 11.7916 4.03273 12.0357 4.27681L15.3169 7.55806C15.561 7.80214 15.561 8.19786 15.3169 8.44194L12.0357 11.7232C11.7916 11.9673 11.3959 11.9673 11.1518 11.7232C10.9077 11.4791 10.9077 11.0834 11.1518 10.8393L13.9911 8L11.1518 5.16069C10.9077 4.91661 10.9077 4.52089 11.1518 4.27681Z" fill="#717680"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 8C5.5 7.65482 5.77982 7.375 6.125 7.375H14.875C15.2202 7.375 15.5 7.65482 15.5 8C15.5 8.34518 15.2202 8.625 14.875 8.625H6.125C5.77982 8.625 5.5 8.34518 5.5 8Z" fill="#717680"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.866117 0.866117C1.10054 0.631696 1.41848 0.5 1.75 0.5H6.125C6.47018 0.5 6.75 0.779822 6.75 1.125C6.75 1.47018 6.47018 1.75 6.125 1.75L1.75 1.75L1.75 14.25H6.125C6.47018 14.25 6.75 14.5298 6.75 14.875C6.75 15.2202 6.47018 15.5 6.125 15.5H1.75C1.41848 15.5 1.10054 15.3683 0.866117 15.1339C0.631696 14.8995 0.5 14.5815 0.5 14.25V1.75C0.5 1.41848 0.631696 1.10054 0.866117 0.866117Z" fill="#717680"/>
</svg>

              <span>Logout</span>
            </div>
            <img src="/icon-caretdown-3.svg" className="w-3.5 h-3.5" />
          </Button>
        </div>
      </aside>

    
      
    </div>
  );
};
