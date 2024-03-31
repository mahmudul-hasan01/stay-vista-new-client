import axiosSecure from "."

export const getAllRooms = async () => {
    const { data } = await axiosSecure('rooms')
    return data
}