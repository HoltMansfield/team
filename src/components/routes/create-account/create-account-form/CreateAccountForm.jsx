import React from 'react'
import Flex from 'flexbox-react'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from 'components'
// import { } from './styled'


function CreateAccountFormRaw (props) {
  return (
    <Flex flexDirection="column">
      <Flex>
        <FormikTextField
          id="email"
          label="Email"
          formikProps={props}
        />
    </Flex>
      <Flex>
        <FormikTextField
          id="password"
          label="Password"
          formikProps={props}
        />
    </Flex>
      <Flex>
        <FormikTextField
          id="confirmPassword"
          label="Confirm Password"
          formikProps={props}
        />
    </Flex>
    </Flex>
  )
}
const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().required('Confirm Password is required'),
})
const formikConfig = {
  validationSchema,
  validateOnChange: true,
  enableReinitialize: true,
  mapPropsToValues: props => {
    return {
      email: '',
      password: '',
      confirmPassword: '',
    }
  }
}
export const CreateAccountForm = withFormik(formikConfig)(CreateAccountFormRaw)
