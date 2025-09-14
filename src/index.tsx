import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "react-phone-input-2/lib/style.css";
import { LanguageProvider } from "./lib/LanguageContext";
import { ThemeProvider } from "./lib/theme-context";
import { ThemeToggle } from "./components/theme/ThemeSwitcher";
import { ThemeDemo } from "./components/theme/ThemeDemo";
import { ChoosePlan } from "./screens/M2/choosePlan";
import { CompanyPlan } from "./screens/CompanyPlan/CompanyPlan";
import { BrowserRouter } from "react-router-dom";
import { ComplexList } from "./screens/M2/ComplexList";
import { SideBarPlan1 } from "./screens/CommonComponents/SideBarPlan1";
import { ClinicList } from "./screens/ClinicList";
import PhoneNumberInput from "./screens/CommonComponents/PhoneInput";
import { AddNewComplex } from "./screens/M2/AddNewComplex";
import { AddNewClinic } from "./screens/M2/AddNewClinic";
import { ElementViewCompany } from "./screens/M2/ElementVeiwCompany/ElementViewCompany";
import { ElementViewComplex } from "./screens/ElementViewComplex/ElementViewComplex";
import { ElementViewClinic } from "./screens/ElementViewClinic/ElementViewClinic";
import { ElementEditCompany } from "./screens/ElementEditCompany/ElementEditCompany";
import { ElementEditComplex } from "./screens/ElementEditComplax/ElementEditComplax";
import { EditClinicDetails } from "./screens/EditClinicDetails/EditClinicDetails";
import { ElementEditComplexPlan2 } from "./screens/ElementEditComplexPlan2/ElementEditComplexPlan2";
import { SideBarPlan2 } from "./screens/CommonComponents/SideBarPlan2";
import { SideBarPlan3 } from "./screens/SideBarPlan3";
import { NoDataSection } from "./screens/M1/NoDataSection";
import { Deactivate } from "./screens/CommonComponents/Deactivate";
import { Activate } from "./screens/CommonComponents/Activate";
import { Delete } from "./screens/CommonComponents/Delete";

function MainApp() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        <LanguageProvider>
          {/* Theme toggle in top-right corner */}
          <div className="fixed top-[35px] right-[195px] z-50">
            <ThemeToggle />
          </div>

          {/* Main app content with theme transition */}
          <div className="theme-transition">
            <main className="flex h-screen w-screen overflow-hidden">
              {/* <ChoosePlan /> */}
              <SideBarPlan1 />
              {/* <SideBarPlan2 local="test"/> */}
              {/* <SideBarPlan3 local="test"/> */}
              {/* <NoDataSection/> */}
              {/* <ComplexList/> */}
              {/* <ClinicList/> */}
              {/* <AddNewComplex /> */}
              {/* <AddNewClinic/> */}

              {/* <ElementViewCompany/> */}
              {/* <ElementViewClinic/> */}
              {/* <ElementViewComplex/> */}
              {/* <ElementEditComplex/> */}
              {/* <ElementEditCompany/> */}
              {/* <ElementViewCompany/> */}
              {/* <ElementEditComplexPlan2/> */}
              {/* <EditClinicDetails/> */}
              {/* <Deactivate>
                Inactive doctors will no longer appear in selection menus or be
                assignable to patients.
              </Deactivate> */}
              {/* <Activate>
                Active doctors will be visible in selection menus and can be
                assigned to patients
              </Activate> */}
              {/* <Delete title="Doctor">
                This action cannot be undone. Deleting a doctor will remove them
                from all lists and make them unavailable for assignment.
              </Delete> */}
              
            </main>
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MainApp />
  </StrictMode>
);
