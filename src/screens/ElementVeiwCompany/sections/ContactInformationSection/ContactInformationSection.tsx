import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";

export const ContactInformationSection = (): JSX.Element => {
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
                    <img src="/icon-caretup.svg" className="w-3.5 h-3.5" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col">
                    <Button
                      variant="ghost"
                      className="h-10 justify-start px-7 py-2 rounded-xl hover:bg-gray-100 text-app-secondary"
                    >
                      Company Details
                    </Button>
                    <Button
                      variant="ghost"
                      className="h-10 justify-start px-7 py-2 rounded-xl hover:bg-gray-100"
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
              <img src="./Back.svg" alt="Logout" className="w-5 h-5" />
              <span>Logout</span>
            </div>
            <img src="/icon-caretdown-3.svg" className="w-3.5 h-3.5" />
          </Button>
        </div>
      </aside>

    
      
    </div>
  );
};
