import {useEffect, useState} from "react";
import {IUser} from "../models/IUser.ts";
import {IUserResponseModel} from "../models/IUserResponseModel.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/users')
                .then(value => value.json())
                .then(({users}: IUserResponseModel) => {
                    setUsers(users);

               });
    }, []);
    return (
        <div>
            {
                users.map( (user: IUser) => <div key={user.id} className='my-5'>
                    {user.username}: {user.email}
                </div>)
            }
        </div>
    );
};