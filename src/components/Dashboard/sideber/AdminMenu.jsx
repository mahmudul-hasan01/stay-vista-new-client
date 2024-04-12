import { FaUsers } from "react-icons/fa";
import MenuItem from "./MenuItem";

const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={FaUsers} label='Manage Users' address='/dashboard/manage-users' />
        </>
    );
};

export default AdminMenu;