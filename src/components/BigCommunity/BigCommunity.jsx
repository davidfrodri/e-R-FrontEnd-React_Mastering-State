import { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../../store/fetchEmployes/actionCreators'

import ShowComponent from '../ShowComponent/ShowComponent'
import Carousel from '../Carousel/Carousel'
import Loading from '../common/Loading/Loading'
import Alert from '../common/Alert/Alert'

export const BigCommunity = ({ employees, isLoading, error, fetchEmployees }) => {
  useEffect(() => {
    fetchEmployees()
  }, [fetchEmployees])

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
          <Carousel>
            {employees.map((employee) => (
              <div key={employee.id} className='card'>
                <img
                  src={employee.photo_url}
                  alt={`profile of ${employee.name}`}
                />
                <p className='description'>{employee.description}</p>
                <p className='name'>{employee.name}</p>
                <p className='job-position'>
                  {employee.position + ' at ' + employee.company}
                </p>
              </div>
            ))}
          </Carousel>
        </ShowComponent>
      )}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees,
    isLoading: state.employees.isLoading,
    error: state.employees.error
  }
}

export default connect(mapStateToProps, { fetchEmployees })(BigCommunity)
