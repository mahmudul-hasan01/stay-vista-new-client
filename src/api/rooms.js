import axiosSecure from "."

export const getAllRooms = async () => {
    const { data } = await axiosSecure('/rooms')
    return data
}

export const getHostRooms = async (email) => {
    const { data } = await axiosSecure(`/rooms/${email}`)
    return data
}

export const addRoom = async (roomData) => {
    const { data } = await axiosSecure.post('/room', roomData)
    return data
}