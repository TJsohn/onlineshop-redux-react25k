import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hooks/hooks";
import { fetchUsers } from "../store/userSlice";

const Users = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default Users;