import { useState, useEffect } from 'react'
import { getEmployeesFromAPI } from '../services'

const useFetchEmployees = () => {
  // TODO: Cambiar Nombre
  const [employees, setEmployees] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await getEmployeesFromAPI()
        setEmployees(employeesData)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchEmployees()
  }, [])

  return { employees, isLoading, error }
}

export default useFetchEmployees
