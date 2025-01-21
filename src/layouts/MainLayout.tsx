import {UsersPage} from "../pages/UsersPage.tsx";
import {Outlet} from "react-router";


function MainLayout() {
    return <div>
        <UsersPage/>
        <Outlet/>
    </div>
}

export default MainLayout;