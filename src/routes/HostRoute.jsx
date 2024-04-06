import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
// import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

// eslint-disable-next-line react/prop-types
const HostRoute = ({ children }) => {

    // const { user, loading } = useAuth()
    const [role, isLoading] = useRole()

    if(isLoading) return <Loader></Loader>

    if (role == 'host') {
       return  children 
    }
    return <Navigate to='/dashboard' ></Navigate>


};

export default HostRoute;