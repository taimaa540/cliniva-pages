import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "react-phone-input-2/lib/style.css";
import { LanguageProvider } from "./lib/LanguageContext";
import { useTranslation } from "react-i18next";

import { ElementChangeStatus } from "./screens/CommonComponents/ElementChangeStatus";


import { ElementDeleteUser } from "./screens/CommonComponents/ElementDeleteUser";
import { ElementLogOutDialog } from "./screens/CommonComponents/ElementLogOutDialog";
import { ThemeProvider } from "./lib/theme-context";
import { ThemeToggle } from "./components/theme/ThemeSwitcher";
import { ThemeDemo } from "./components/theme/ThemeDemo";
import { ChoosePlan } from "./screens/M2/choosePlan";
import { CompanyPlan } from "./screens/M2/CompanyPlan";
import { BrowserRouter } from "react-router-dom";
import { ComplexList } from "./screens/M2/ComplexList";
import { SideBarPlan1 } from "./screens/CommonComponents/SideBarPlan1";
import { ClinicList } from "./screens/M2/ClinicList";
import PhoneNumberInput from "./screens/CommonComponents/test";
import { AddNewComplex } from "./screens/M2/AddNewComplex";
import { AddNewClinic } from "./screens/M2/AddNewClinic";
import WeatherCard from "./test";
import { ElementViewCompany } from "./screens/M2/ElementVeiwCompany/ElementViewCompany";
import { ElementViewComplex } from "./screens/M2/ElementViewComplex/ElementViewComplex";
import { ElementViewClinic } from "./screens/M2/ElementViewClinic/ElementViewClinic";
import { ElementEditCompany } from "./screens/M2/ElementEditCompany/ElementEditCompany";
import { ElementEditComplex } from "./screens/M2/ElementEditComplax/ElementEditComplax";
import { EditClinicDetails } from "./screens/M2/EditClinicDetails/EditClinicDetails";
import { ElementEditComplexPlan2 } from "./screens/M2/ElementEditComplexPlan2/ElementEditComplexPlan2";
import { SideBarPlan2 } from "./screens/CommonComponents/SideBarPlan2";
import { SideBarPlan3 } from "./screens/CommonComponents/SideBarPlan3";
import { EditUserDetails } from "./screens/M1/EditUserDetails";
import { NoDataSection } from "./screens/M1/NoDataSection";
import PhoneInputWithShortCode from "./screens/CommonComponents/test";
import Example from "./screens/CommonComponents/test";
import { ViewDoctorDetails } from "./screens/Moudule3/ViewDoctorDetails/ViewDoctorDetails";
import { ElementEditeDetalisCinicP3 } from "./screens/ElementEditDetailsClinicP3/ElementEditDetailsClinicP3";
import { ElementViewDetalisComplexp2 } from "./screens/ElementViewDetailsComplexp2/ElementViewDetalisComplexp2";
import { ElementViewDetailsClinicP3 } from "./screens/ElementViewDetailsClinicP3/ElementViewDetailsClinicP3";
import { AddNewUser } from "./screens/M1/AddNewUser";
import { UserListSection } from "./screens/M1/userListSection";
import { UserDetails } from "./screens/M1/UserDetails";
import { ViewStaffDetails } from "./screens/Moudule3/ViewStaffDetails/ViewStaffDetails";
import { ViewDoctorList } from "./screens/Moudule3/ViewDoctorList/ViewDoctorList";
import { ViewListOfSpicialities } from "./screens/Moudule3/ViewListOfSpecialities/ViewListOfSpecialities";
import { ViewStaffMembersList } from "./screens/Moudule3/ViewStaffMembersList/ViewStaffMembersList";
import AddNewSpecialities from "./screens/CommonComponents/AddNewSpecialities";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StaffMemberDetails } from "./screens/Moudule3/SrtaffMemberDetails/StaffMemberDetails";
import { EditDoctorDetails } from "./screens/Moudule3/EditDoctorsDetails/EditDoctorsDetails";
import { Edit } from "lucide-react";
import { ViewSpecialityDetails } from "./screens/Moudule3/ViewSpecialityDetails/ViewSpecialityDetails";
import { ElementEditSpicialityDetails } from "./screens/Moudule3/EditSpecialityDetails/ElementEditSpicialityDetail";
import { ViewServiceDetails } from "./screens/M4/ViewServiceDetails/ViewServiceDetails";

import { ViewListOfPatients } from "./screens/M5/ViewListOfPatients/ViewListOfPatients";
import { AddNewPatient } from "./screens/M5/AddNewPatient/AddNewPatient";
import { EditPatientDetails } from "./screens/M5/EditPaitentDetails/EditPatientDetails"; 
import { EditServiceDetails } from "./screens/M4/EditServiceDetails/EditServiceDetails";

function MainApp() {
  return (
    <BrowserRouter>

      {/* باقي الصفحات */}


      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        <LanguageProvider>
          {/* Theme toggle in top-right corner */}
          <div className="fixed top-[35px] right-[195px] z-50">
            <ThemeToggle />
          </div>

          {/* Main app content with theme transition */}
          <div className="theme-transition">
            <main className="flex h-screen w-screen overflow-hidden">
              {/*  */}
              {/* <ChoosePlan /> */}
              {/* <SideBarPlan1 /> */}
              {/* <SideBarPlan2 local="test"/> */}
              {/* <SideBarPlan3 local="test"/> */}
              {/* <EditUserDetails/> */}
              {/* <NoDataSection/> */}
              {/* <UserListSection/> */}
              {/* <AddNewUser/> */}
              {/* <UserDetails/> */}
              {/* <ElementChangeStatus/> */}
              {/* <ElementDeleteUser title="user"/> */}
              {/* <ElementLogOutDialog/> */}
              {/* <ComplexList/> */}
              {/* <ClinicList/> */}
              {/* <AddNewComplex /> */}
              {/* <AddNewClinic/> */}
              {/* <WeatherCard/> */}
              {/* <ViewSpecialityDetails/>// */}
              {/* <ElementEditSpicialityDetails/> */}
              {/* <ElementViewClinic/> */}
              {/* <ElementViewComplex/> */}
              {/* <ElementEditComplex/> */}
              {/* <ElementEditCompany/> */}
              {/* <ElementViewCompany /> */}
              {/* <ElementEditComplexPlan2/> */}
              {/* <ElementViewDetalisComplexp2/> */}
              {/* <EditClinicDetails/> */}
                  {/* <ElementEditeDetalisCinicP3/> */}
              {/* <ElementViewDetailsClinicP3/> */}
              {/* <Example/> */}
              {/*M3*/ }

              {/* <ViewDoctorDetails/> */}
              {/* <ViewDoctorList/> */}
              <ViewListOfSpicialities/>
              {/* <StaffMemberDetails/> */}
              {/* <EditDoctorDetails/> */}
              {/* <ViewStaffMembersList/> */}
              {/* <ViewStaffDetails/> */}
              {/* <ViewSpecialityDetails/> */}
              {/* <ElementEditSpicialityDetails/> */}
         
              {/*M 4*/}
              {/* <EditServiceDetails/> */}


              {/* <ViewServiceDetails/> */}

              {/* M5*/}
              {/* <ViewListOfPatients/> */}
              {/* <AddNewPatient /> */}
              {/* <EditPatientDetails/> */}
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
