import axiosSecure from "."

export const saveUser = async user => {
  const currentUser = {
    email: user.email,
    role: 'guest',
    status: 'Verified',
  }
  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser)

  return data
}

// Get token from server
export const getToken = async email => {
  const { data } = await axiosSecure.post(`/jwt`, { email })
  console.log('Token received from server------>', data)
  return data
}

// clear cookie
export const clearCookie = async email => {
  const { data } = await axiosSecure.get(`/logout`, { email })
  console.log('Token received from server------>', data)
  return data
}

// get user role
export const getAllUsers= async () => {
  const { data } = await axiosSecure(`/users`)
  return data
}