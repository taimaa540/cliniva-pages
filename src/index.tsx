import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "react-phone-input-2/lib/style.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { ElementUsersNoDataTo } from "./screens/ElementUsersNoDataTo/ElementUsersNoDataTo";
import { ElementUsersAddNew } from "./screens/ElementUsersAddNew/ElementUseresAddNew";
import { ElementUsersDesktop } from "./screens/UsersDesktop/ElementUsersDesktop";
import { ElementUserDetails } from "./screens/UserDetails/ElementUserDetails";
import { ElementEditUserDetails } from "./screens/ElementEditUserDetails/ElementEditUserDetails";
import { ElementChangeStatus } from "./screens/ElementChangeStatus";
import { ElementDeleteUser } from "./screens/ElementDeleteUser";
import { ElementLogOutDialog } from "./screens/ElementLogOutDialog";
import { ThemeProvider } from "./lib/theme-context";
import { ThemeToggle } from "./components/theme/ThemeSwitcher";
import { ThemeDemo } from "./components/theme/ThemeDemo";
import { ChoosePlan } from "./screens/choosePlan";
import { CompanyPlan } from "./screens/CompanyPlan/CompanyPlan";
import { BrowserRouter } from "react-router-dom";
import { ComplexList } from "./screens/ComplexList";
import { UserManagementSection } from "./screens/ElementUsersNoDataTo/sections/UserManagementSection/UserManagementSection";
import { ClinicList } from "./screens/ClinicList";
import PhoneNumberInput from "./screens/test";
import { AddNewComplex } from "./screens/AddNewComplex";
import { AddNewClinic } from "./screens/AddNewClinic";
import WeatherCard from "./test";
import { ElementViewCompany } from "./screens/ElementVeiwCompany/ElementViewCompany";
import { ElementViewComplex } from "./screens/ElementViewComplex/ElementViewComplex";
import { ElementViewClinic } from "./screens/ElementViewClinic/ElementViewClinic";
import { ElementEditCompany } from "./screens/ElementEditCompany/ElementEditCompany";
import { ElementEditComplex } from "./screens/ElementEditComplax/ElementEditComplax";
import { EditClinicDetails } from "./screens/EditClinicDetails/EditClinicDetails";
import { ElementEditComplexPlan2 } from "./screens/ElementEditComplexPlan2/ElementEditComplexPlan2";

// ✨ مكون رئيسي يحتوي state
function MainApp() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        {/* Theme toggle in top-right corner */}
        <div className="fixed top-[35px] right-[195px] z-50">
          <ThemeToggle />
        </div>

        {/* Main app content with theme transition */}
        <div className="theme-transition">
          <main className="flex h-screen w-screen overflow-hidden">
            {/* هنا باقي شاشاتك (ممكن تفعّل أي واحدة) */}
            {/* <ChoosePlan /> */}
            {/* <ElementUsersNoDataTo /> */}
            {/* <ElementUsersAddNew /> */}
            {/* <ElementUsersDesktop/> */}
            {/* <ElementUserDetails/> */}
            {/* <ElementEditUserDetails/> */}
            {/* <ElementChangeStatus/> */}
            {/* <ElementDeleteUser title="user"/> */}
            {/* <ElementLogOutDialog/> */}
            <UserManagementSection local="test" />
            {/* <ComplexList/> */}
            {/* <ClinicList/> */}
            {/* <AddNewComplex /> */}
            {/* <AddNewClinic/> */}
            {/* <PhoneNumberInput/> */}
            {/* <WeatherCard/> */}
            {/* <ElementViewCompany/> */}
            {/* <ElementViewClinic/> */}

            {/* <ElementViewComplex/> */}
            {/* <ElementEditComplex/> */}
            {/* <ElementEditCompany/> */}
            {/* <ElementViewCompany/> */}
            {/* <ElementEditComplexPlan2/> */}
            {/* <EditClinicDetails/> */}
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <MainApp />
    </I18nextProvider>
  </StrictMode>
);
