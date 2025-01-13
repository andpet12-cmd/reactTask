import {Link, Outlet} from "react-router";


export const MainLayout = () => {
    return <div>
        <nav>
            <ul>
                <li>
                    <Link to="/users">UsersPage</Link>
                </li>

            </ul>
        </nav>
        <Outlet/>
    </div>
}