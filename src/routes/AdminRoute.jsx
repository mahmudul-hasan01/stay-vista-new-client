import { Navigate } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useRole from "../hooks/useRole";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {

    // const { user, loading } = useAuth()
    const [role, isLoading] = useRole()

    if(isLoading) return <Loader></Loader>

    if (role == 'admin') {
       return  children 
    }
    return <Navigate to='/dashboard/manage-users' ></Navigate>


};

export default AdminRoute;