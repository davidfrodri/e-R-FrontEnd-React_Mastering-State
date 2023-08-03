import clientAxios from './config/axios'

export const getEmployeesFromAPI = async () => {
  const response = await clientAxios.get('/community')
  return response.data
}

export const getEmployeeFromAPI = async (id) => {
  const response = await clientAxios.get(`/community/${id}`)
  return response
}

export const postEmailToAPI = async (values) => {
  try {
    const response = await clientAxios.post('/subscribe', values)
    return response
  } catch (error) {
    return error.response
  }
}

export const deleteEmailToAPI = async (email) => {
  try {
    const response = await clientAxios.delete(`/subscribe/?email=${encodeURIComponent(email)}`)
    return response
  } catch (error) {
    return error.response
  }
}
