import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18n";
import "react-phone-input-2/lib/style.css";
import { LanguageProvider } from "./lib/LanguageContext";
import { ThemeProvider } from "./lib/theme-context";

import { ChoosePlan } from "./screens/M2/choosePlan";
import { CompanyPlan } from "./screens/M2/CompanyPlan";
import { BrowserRouter } from "react-router-dom";

import { ElementViewCompany } from "./screens/M2/ElementVeiwCompany/sections/LegalDocumentaionsSection/LegalDocumentsSection ";
import { ElementViewComplex } from "./screens/M2/ElementViewComplex/sections/MedicalComplexDetailsSection/MedicalComplexDetailsSection";
import { ElementViewClinic } from "./screens/M2/ElementViewClinic/sections/MedicalDetailsSection/MedicalDetailsSection";
import { ElementEditCompany } from "./screens/M2/ElementEditCompany/sections/CompanyDetailsSectio/CompanyDetailsSectio";
import { ElementEditComplex } from "./screens/M2/ElementEditComplax/sections/MedicalDetailsSection/MedicalDetailsSection";
import { EditClinicDetails } from "./screens/M2/EditClinicDetails/sections/CapacitySection/CapacitySection";
import { ElementEditComplexPlan2 } from "./screens/M2/ElementEditComplexPlan2/EditComplex/EditComplex";

import { EditUserDetails } from "./screens/M1/EditUserDetails";

import { ViewDoctorDetails } from "./screens/Moudule3/ViewDoctorDetails/ViewDoctorDetails";
import { ElementEditeDetalisCinicP3 } from "./screens/ElementEditDetailsClinicP3/Sections/contectEditDetails/ContentEditDetails";
import { ElementViewDetalisComplexp2 } from "./screens/ElementViewDetailsComplexp2/ElementViewDetailsContectp2/ElementViewDetailsContent";
import { ElementViewDetailsClinicP3 } from "./screens/ElementViewDetailsClinicP3/ContentViewDetailsClinicP3/ContentViewDetailsClinicP3";
import { AddNewUser } from "./screens/M1/AddNewUser";
import { UserListSection } from "./screens/M1/userListSection";
import { UserDetails } from "./screens/M1/UserDetails";
import { ViewStaffDetails } from "./screens/Moudule3/ViewStaffDetails/ViewStaffDetails";
import { ViewDoctorList } from "./screens/Moudule3/ViewDoctorList/ViewDoctorList";
import { ViewListOfSpicialities } from "./screens/Moudule3/ViewListOfSpecialities/ViewListOfSpecialities";
import { ViewStaffMembersList } from "./screens/Moudule3/ViewStaffMembersList/ViewStaffMembersList";

import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { StaffMemberDetails } from "./screens/Moudule3/SrtaffMemberDetails/StaffMemberDetails";
import { EditDoctorDetails } from "./screens/Moudule3/EditDoctorsDetails/EditDoctorsDetails";

import { ViewSpecialityDetails } from "./screens/Moudule3/ViewSpecialityDetails/ViewSpecialityDetails";
import { ElementEditSpicialityDetails } from "./screens/Moudule3/EditSpecialityDetails/ElementEditSpicialityDetail";
import { ViewServiceDetails } from "./screens/M4/ViewServiceDetails/ViewServiceDetails";

import { ViewListOfPatients } from "./screens/M5/ViewListOfPatients/ViewListOfPatients";
import { AddNewPatient } from "./screens/M5/AddNewPatient/AddNewPatient";
import { EditPatientDetails } from "./screens/M5/EditPaitentDetails/EditPatientDetails";
import { EditServiceDetails } from "./screens/M4/EditServiceDetails/EditServiceDetails";
import { ServicesList } from "./screens/M4/ServicesList";
import { AddNewService } from "./screens/M4/AddNewService";

import { ComplexPlane } from "./screens/M2/ComplexPlane";
import { ClinicsPlane } from "./screens/M2/ClinicsPlan";
import { AppProvider } from "./Context/ContextchooseSidbar";
import { Appointments } from "./screens/M6/AppointmentsHome";
import { useState } from "react";

import { MoreDetails } from "./screens/M6/MoreDetails";
import { PatientDetails } from "./screens/M5/PatientDetails";
import LoginPage from "./screens/M2/LogoIn";
import { ComplexList } from "./screens/M2/ComplexList";
import { AddNewClinic } from "./screens/M2/AddNewClinic";
import { AddNewComplex } from "./screens/M2/AddNewComplex";
import { ClinicList } from "./screens/M2/ClinicList";
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
  const [showLeftSidebar, setShowLeftSidebar] = useState(true);

  return (
    <BrowserRouter>
      {/* باقي الصفحات */}

      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        <LanguageProvider>
          <AppProvider>
            {/* Theme toggle in top-right corner */}
            {/*  <div className="fixed top-[35px] right-[195px] z-50">
            <ThemeToggle />
          </div>*/}

            {/* Main app content with theme transition */}
            <div className="theme-transition">
              <main className="flex h-screen w-screen overflow-hidden">
                {/* M1 */}
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route path="UserDesktop" element={<UserListSection />} />
                    <Route path="ViewUserDetails" element={<UserDetails />} />
                    <Route path="AddNewUser" element={<AddNewUser />} />
                    <Route
                      path="EditUserDetails"
                      element={<EditUserDetails />}
                    />
                    {/* M2.BackIcon*/}

                    {/* M2 */}

                    <Route path="" element={<LoginPage />} />

                    <Route path="chooseplan" element={<ChoosePlan />} />
                    <Route path="CompanyPlane" element={<CompanyPlan />} />
                    <Route path="ComplexPlane" element={<ComplexPlane />} />
                    <Route path="ClinicPlane" element={<ClinicsPlane />} />
                    <Route path="ViewlistofComplex" element={<ComplexList />} />
                    <Route path="AddNewClinic" element={<AddNewClinic />} />
                    <Route path="AddNewComplex" element={<AddNewComplex />} />
                    <Route
                      path="ElementViewCompany"
                      element={<ElementViewCompany />}
                    />
                    <Route path="ViewListOfClinics" element={<ClinicList />} />
                    <Route
                      path="ElementViewCompany/EditCompanyDetials"
                      element={<ElementEditCompany />}
                    />
                    <Route
                      path="ElementViewComplex"
                      element={<ElementViewComplex />}
                    />
                    <Route
                      path="ElementViewComplex/EditComplexDetails"
                      element={<ElementEditComplex />}
                    />

                    <Route
                      path="ElementViewClinic"
                      element={<ElementViewClinic />}
                    />
                    <Route
                      path="ElementViewClinic/EditClinicDetails"
                      element={<EditClinicDetails />}
                    />
                    <Route
                      path="ElementViewComplexP2"
                      element={<ElementViewDetalisComplexp2 />}
                    />
                    <Route
                      path="ElementViewCopmlexP2/ElementEditCopmlexP2"
                      element={<ElementEditComplexPlan2 />}
                    />
                    <Route
                      path="ElementViewClinicP3"
                      element={<ElementViewDetailsClinicP3 />}
                    />
                    <Route
                      path="ElementViewClinicP3/ElementEditClincp3"
                      element={<ElementEditeDetalisCinicP3 />}
                    />
                    {/* M2.BackIcon*/}
                    <Route path="Home" element={<LoginPage />} />
                    <Route path="ChossPlan" element={<ChoosePlan />} />
                    {/*  */}
                    {/* M3  */}
                    <Route
                      path="ViewStaffList"
                      element={<ViewStaffMembersList />}
                    ></Route>
                    <Route
                      path="ViewStaffList/ViewStaffDetails"
                      element={<ViewStaffDetails />}
                    ></Route>
                    <Route
                      path="ViewStaffList/ViewStaffDetails/EditStaffDetails"
                      element={<StaffMemberDetails />}
                    ></Route>

                    <Route
                      path="ViewDoctorList"
                      element={<ViewDoctorList />}
                    ></Route>
                    <Route
                      path="ViewDoctorList/ViewDoctorDetails"
                      element={<ViewDoctorDetails />}
                    ></Route>
                    <Route
                      path="ViewDoctorList/ViewDoctorDetails/EditDoctorDetials"
                      element={<EditDoctorDetails />}
                    ></Route>
                    <Route
                      path="ViewSpecialtiesList"
                      element={<ViewListOfSpicialities />}
                    ></Route>
                    <Route
                      path="ViewSpecialtiesDetails"
                      element={<ViewSpecialityDetails />}
                    ></Route>

                    <Route
                      path="ViewSpecialtiesList/EditSpecialtiesDetails"
                      element={<ElementEditSpicialityDetails />}
                    ></Route>
                    {/* M4 */}
                    <Route
                      path="ServicesList"
                      element={<ServicesList />}
                    ></Route>
                    <Route
                      path="AddNewService"
                      element={<AddNewService />}
                    ></Route>
                    <Route
                      path="EditServiceDetials"
                      element={<EditServiceDetails />}
                    ></Route>
                    <Route
                      path="ViewServiceDetails"
                      element={<ViewServiceDetails />}
                    ></Route>

                    {/* M5  */}
                    <Route
                      path="ViewLastOfPatient"
                      element={<ViewListOfPatients />}
                    ></Route>
                    <Route
                      path="AddNewPatient"
                      element={<AddNewPatient />}
                    ></Route>
                    <Route
                      path="EditPatientDetails"
                      element={<EditPatientDetails />}
                    ></Route>
                    <Route
                      path="ViewPatientDetail"
                      element={<PatientDetails />}
                    ></Route>

                    {/* M6  */}
                    <Route
                      path="Appointments"
                      element={
                        <Appointments
                          showLeftSidebar={showLeftSidebar}
                          setShowLeftSidebar={setShowLeftSidebar}
                        />
                      }
                    ></Route>

                    <Route path="MoreDetails" element={<MoreDetails />} />
                  </Route>
                </Routes>
              </main>
            </div>
          </AppProvider>
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
