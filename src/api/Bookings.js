import axiosSecure from ".";

export const createPaymentIntent = async (price) => {
    const {data} = await axiosSecure.post('/payment-intent', price)
    return data
}

// save booking

export const saveBookingInfo = async (paymentInfo) => {
    const {data} = await axiosSecure.post('/bookings', paymentInfo)
    return data
}

// update status

export const updateStatus = async (id, status) => {
    const {data} = await axiosSecure.patch(`/rooms/status/${id}`, {status})
    return data
}

// get all booking info for guest

export const getBookings = async (email) => {
    const {data} = await axiosSecure.get(`/bookings?email=${email}`)
    return data
}

// get all booking info for host
export const getHostBookings = async () => {
    const {data} = await axiosSecure.get(`/bookings/host`)
    return data
}