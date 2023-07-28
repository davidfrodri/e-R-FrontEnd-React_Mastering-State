import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useState } from 'react'

import { postEmailToAPI, deleteEmailToAPI } from '../../services'
import Alert from '../common/Alert/Alert'

const JoinOurProgram = () => {
  const [responseStatus, setResponseStatus] = useState('')
  const [buttonClicked, setButtonClicked] = useState(null)

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Ingresa un email válido')
      .required('El email es requerido')
  })

  const handleSubscribe = async (values, { setSubmitting }) => {
    const response = await postEmailToAPI(values)
    setResponseStatus(response)
    setSubmitting(false)
  }

  const handleUnsubscribe = async (values, { setSubmitting }) => {
    const response = await deleteEmailToAPI(values.email)
    setResponseStatus(response)
    setSubmitting(false)
  }

  const handleFormSubmit = (values, formikBag) => {
    if (buttonClicked === 'subscribe') {
      handleSubscribe(values, formikBag)
    } else if (buttonClicked === 'unsubscribe') {
      handleUnsubscribe(values, formikBag)
    }
  }

  return (
    <div className='join-our-program'>
      <h2>Join Our Program</h2>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <Formik
        initialValues={{ id: '', email: '' }}
        onSubmit={handleFormSubmit}
        validationSchema={validationSchema}
      >
        {({ dirty, touched, errors }) => (
          <Form className='email-form'>
            <div className='row'>
              <Field
                className={
                  touched.email && errors.email ? 'fieldError' : 'field'
                }
                id='email'
                name='email'
                placeholder='Email'
              />
              <div className='buttons'>
                {responseStatus.statusText === 'Conflict' ? <button
                  className='btn unsubscribe'
                  type='submit'
                  disabled={!dirty}
                  onClick={() => setButtonClicked('unsubscribe')}
                >
                Unsubscribe
                </button> : <button
                  className='btn'
                  type='submit'
                  disabled={!dirty}
                  onClick={() => setButtonClicked('subscribe')}
                >
              Subscribe
                </button>}
              </div>
            </div>
            {touched.email && errors.email && (
              <ErrorMessage
                name='email'
                component='div'
                className='error-message'
              />
            )}
            {/* it's necessary refactor and handle this alert better  */}
            { responseStatus.statusText === 'Created' ? <Alert variant='green' text='Your email has been created' /> : null}
            { responseStatus.status === 200 ? <Alert variant='green' text='Your email has been deleted'/> : null}
            { responseStatus.status === 404 ? <Alert variant='yellow' text='Email not found'/> : null}
            { responseStatus.statusText === 'Conflict' ? <Alert variant='blue' text='That email already exist' /> : null}
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default JoinOurProgram
