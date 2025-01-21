import {useEffect, useState} from "react";
import {IUser} from "../../models/IUser.ts";
import {IUserResponse} from "../../models/IUserResponse.ts";
import {getUsers} from "../../services/api.service.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router";


const UsersComponent = () => {

    const [searchParams] = useSearchParams({page: '1'});

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IUserResponse) => {
            setUsers(users);
        });
    }, [searchParams]);

    return (
        <div>
            {users.map((user: IUser) => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;
