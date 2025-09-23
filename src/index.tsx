import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "react-phone-input-2/lib/style.css";
import { LanguageProvider } from "./lib/LanguageContext";
import { useTranslation } from "react-i18next";


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
import { Suspense } from "react";
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
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
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
import { ServicesList } from "./screens/M4/ServicesList";
import { AddNewService } from "./screens/M4/AddNewService";


function Layout() {

  return (
    <div className="flex h-screen w-screen overflow-hidden">

      {/* الصفحات رح تنعرض هون */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
function MainApp() {
  return (
    <BrowserRouter>

      {/* باقي الصفحات */}


      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        <LanguageProvider>
          {/* Theme toggle in top-right corner */}
          { /*  <div className="fixed top-[35px] right-[195px] z-50">
            <ThemeToggle />
          </div>*/}

          {/* Main app content with theme transition */}
          <div className="theme-transition">
            <main className="flex h-screen w-screen overflow-hidden">





              {/*  */}
              {/* <ChoosePlan /> */}
              {/* <SideBarPlan1 /> */}


              {/* <SideBarPlan3 local="test"/> */}

              {/* <NoDataSection/> */}


              {/* <UserDetails/> */}
              {/* <ElementChangeStatus/> */}
              {/* <ElementDeleteUser title="user"/> */}
              {/* <ElementLogOutDialog/> */}
              {/* <ComplexList/> */}
              {/* <ClinicList/> */}
              {/* <AddNewComplex /> */}
              {/* <AddNewClinic/> */}
              {/* <WeatherCard/> */}
              {/* <ViewSpecialityDetails/> */}



              {/* <ElementEditComplex/> */}




              {/* <ElementEditComplexPlan2/> */}
              {/* <ElementViewDetalisComplexp2/> */}

              {/* <ElementEditeDetalisCinicP3/> */}
              {/* <ElementViewDetailsClinicP3/> */}

              {/* <Example/> */}
              {/*M3*/}





              {/*M1*/}
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route path="UserDesktop" element={<UserListSection />} />
                  <Route path="EditUserDEtails" element={<EditUserDetails />} />
                  <Route path="AddNewUser" element={<AddNewUser />} />


                  {/* M2*/}



                  <Route path="ElementViewCompany" element={<ElementViewCompany />} />
                  <Route path="" element={<ElementViewCompany />} />
                  <Route path="ElementViewCompany/EditCompanyDetials" element={<ElementEditCompany />} />
                  <Route path="ElementViewComplex" element={<ElementViewComplex />} />
                  <Route path="ElementViewComplex/EditComplexDetails" element={
                    <ElementEditComplex />}
                  />


                  <Route path="ElementViewClinic" element={<ElementViewClinic />} />
                  <Route path="ElementViewClinic/EditClinicDetails" element={<EditClinicDetails />} />


                  {/* M3 */}
                  <Route path="ViewStaffList" element={<ViewStaffMembersList />}></Route>
                  <Route path="ViewStaffList/View Staff Details" element={<ViewStaffDetails />}></Route>
                  <Route path="ViewStaffList/View Staff Details/EditStaffDetails" element={<StaffMemberDetails />}></Route>

                  <Route path="ViewDoctorList" element={<ViewDoctorList />}></Route>
                  <Route path="ViewDoctorList/ViewDoctorDetails" element={<ViewDoctorDetails />}></Route>
                  <Route path="ViewDoctorList/ViewDoctorDetails/EditDoctorDetials" element={<EditDoctorDetails />}></Route>
                  <Route path="ViewSpecialtiesList" element={<ViewListOfSpicialities />}></Route>
                  <Route path="ViewSpecialtiesDetails" element={<ViewSpecialityDetails />}></Route>

                  <Route path="ViewSpecialtiesList/EditSpecialtiesDetails" element={<ElementEditSpicialityDetails />}></Route>
                  {/* M4 */}
                  <Route path="ServicesList" element={<ServicesList />}></Route>
                  <Route path="AddNewService" element={<AddNewService />}></Route>
                  <Route path="EditServiceDetials" element={<EditServiceDetails />}></Route>
                  <Route path="ViewServiceDetails" element={<ViewServiceDetails />}></Route>
                  {/* M5 */}
                  <Route path="ViewPatientDetails" element={<ViewListOfPatients />}></Route>
                  <Route path="AddNewPatient" element={<AddNewPatient />}></Route>
                  <Route path="EditPatientDetails" element={<EditPatientDetails />}></Route>
                </Route>
              </Routes>
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
