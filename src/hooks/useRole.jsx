import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../api";

const useRole = () => {

    const { user, loading } = useAuth()

    const {data: role = [], isLoading} = useQuery({
        enabled: !loading && !!user?.email,
        queryKey: [`user`],
        queryFn: async () => {
            const res =await axiosSecure.get(`/user/${user?.email}`)
            return res.data.role
        }
    })

    return [role, isLoading]
};

export default useRole;