import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { getEmployeeFromAPI } from '../../services'
import ShowComponent from '../ShowComponent/ShowComponent'
import Loading from '../common/Loading/Loading'
import Alert from '../common/Alert/Alert'

export const UserCommunity = () => {
  const [employee, setEmployee] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedEmployee = await getEmployeeFromAPI(id)
        setEmployee(fetchedEmployee.data)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setError(error)
        if (error.response.data === 'User not found') {
          navigate('/not-found')
        }
      }
    }

    fetchData()
  }, [id])

  return (
    <div className='big-community'>
      {isLoading && !error ? (
        <Loading />
      ) : error ? (
        <Alert variant='red' text={error.message} />
      ) : (
        // TODO: In this case, it would be good to add a section/interface to show the user that there is an error and the section cannot be displayed
        <ShowComponent titleSection='Big community of People Like You' sectionName='bigCommunity'>
          <h3>
            We’re proud of our products, and we’re really excited when we get
            feedback from our users.
          </h3>
          <div key={employee.id} className='card'>
            <img
              src={employee.avatar}
              alt={`profile of ${employee.firstName}`}
            />
            <p className='description'>{employee.description}</p>
            <p className='name'>{`${employee.firstName} ${employee.lastName}`}</p>
            <p className='job-position'>
              {employee.position}
            </p>
          </div>
        </ShowComponent>
      )}
    </div>
  )
}

export default UserCommunity
