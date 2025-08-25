import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementUsersNoDataTo } from "./screens/ElementUsersNoDataTo/ElementUsersNoDataTo";
import { ElementUsersAddNew } from "./screens/ElementUsersAddNew/ElementUseresAddNew";
import { ElementUsersDesktop } from "./screens/UsersDesktop/ElementUsersDesktop";
import { ElementUserDetails } from "./screens/UserDetails/ElementUserDetails";
import { ElementEditUserDetails } from "./screens/ElementEditUserDetails/ElementEditUserDetails";
import './i18n';
import { ElementChangeStatus } from "./screens/ElementChangeStatus";
import { ElementDeleteUser } from "./screens/ElementDeleteUser";
import { ElementLogOutDialog } from "./screens/ElementLogOutDialog";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    {/* <ElementUsersNoDataTo /> */}
    {/* <ElementUsersAddNew/> */}
    {/* <ElementUsersDesktop/> */}
    <ElementUserDetails/>
    {/* <ElementEditUserDetails/> */}
    {/* <ElementChangeStatus/> */}
    {/* <ElementDeleteUser title="user"/> */}
    {/* <ElementLogOutDialog/> */}
    
  </StrictMode>,
);
