import UsersComponent from "../components/users-component/UsersComponent.tsx";
import {PaginationComponent} from "../components/pagination-component/PaginationComponent.tsx";

export const UsersPage = () => {

    return (
        <div>
            Main page
            <UsersComponent/>
            <PaginationComponent/>

        </div>

    );
};