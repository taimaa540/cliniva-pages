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

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="cliniva-theme">
        {/* Theme toggle in top-right corner */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        {/* Main app content with theme transition */}
        <div className="theme-transition">
          <main className="flex h-screen w-screen overflow-hidden">
            {/* Theme Demo - Uncomment to see theme system in action */}
            {/* <ThemeDemo /> */}

            {/* Original app components */}
            <ChoosePlan />
            {/* <CompanyPlan /> */}
            {/* <ElementUsersNoDataTo /> */}
            {/* <ElementUsersAddNew /> */}
            {/* <ElementUsersDesktop/> */}
            {/* <ElementUserDetails/> */}
            {/* <ElementEditUserDetails/> */}
            {/* <ElementChangeStatus/> */}
            {/* <ElementDeleteUser title="user"/> */}
            {/* <ElementLogOutDialog/> */}
          </main>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
