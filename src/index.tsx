import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
// the default weight 400

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

import { ElementViewCompany } from "./screens/ElementVeiwCompany/ElementViewCompany";
import { ElementViewComplex } from "./screens/ElementViewComplex/ElementViewComplex";
import { ElementViewClinic } from "./screens/ElementViewClinic/ElementViewClinic";
import { ElementEditCompany } from "./screens/ElementEditCompany/ElementEditCompany"; 
import { ElementEditComplex } from "./screens/ElementEditComplax/ElementEditComplax";
import { EditClinicDetails } from "./screens/EditClinicDetails/EditClinicDetails";
import { ElementEditComplexPlan2} from "./screens/ElementEditComplexPlan2/ElementEditComplexPlan2";
createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        {/* Theme toggle in top-right corner */}
        <div className="fixed top-[40px] right-[205px] z-50">
          <ThemeToggle />
        </div>

        {/* Main app content with theme transition */}
        <div className="theme-transition">
          
          <main className="flex h-screen w-screen overflow-hidden">
            {/* Theme Demo - Uncomment to see theme system in action */}
            {/* <ThemeDemo /> */}

            {/* Original app components */}
            {/* <ChoosePlan /> */}
            {/* <ElementUsersNoDataTo /> */}
            {/* <ElementUsersAddNew /> */}
            <ElementUsersDesktop/>
            {/* <ElementUserDetails/> */}
            {/* <ElementEditUserDetails/> */}
            {/* <ElementChangeStatus/> */}
            {/* <ElementDeleteUser title="user"/> */}
            {/* <ElementLogOutDialog/> */}
            {/* <UserManagementSection local="test" dark={false} /> */}
            {/* <ComplexList/> */}
            {/* <ClinicList/> */}
       
        {/* Theme Demo - Uncomment to see theme system in action */}
        {/* <ThemeDemo /> */}
{/* <ElementViewCompany/> */}
        {/* Original app components */}
        {/* <ChoosePlan /> */}
        {/* <CompanyPlan/> */}
        {/* <ElementUsersNoDataTo /> */}
        {/* <ElementUsersAddNew /> */}
        {/* <ElementUsersDesktop/> */}

        {/* <ElementViewClinic/> */}

        {/* <ElementViewComplex/> */}
          
        {/* <ElementUserDetails/> */}
        {/* <ElementEditUserDetails/> */}
        {/* <ElementChangeStatus/> */}
        {/* <ElementDeleteUser /> */}
        {/* <ElementLogOutDialog/> */}
        {/* <ElementEditComplex/> */}
       {/* <ElementEditCompany/> */}
        {/* <ElementViewCompany/> */}
             {/* <ElementEditComplexPlan2/> */}
        {/* <EditClinicDetails/> */}
   
        </main>
      </div>
    </ThemeProvider>
     </BrowserRouter>
  </StrictMode>
 
);


