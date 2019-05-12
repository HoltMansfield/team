import React from 'react'
import Flex from 'flexbox-react'
import Grid from '@material-ui/core/Grid'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import { FormikTextField } from 'components'
import { useForms } from 'hooks/core/use-forms/useForms'
// import { } from './styled'


function CreateAccountFormRaw (props) {
  const { formIsValid } = useForms()

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={4}>
          <FormikTextField
            id="email"
            label="Email"
            formikProps={props}
          />
      </Grid>
      <Grid item xs={12} lg={4}>
          <FormikTextField
            id="password"
            label="Password"
            formikProps={props}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <FormikTextField
            id="confirmPassword"
            label="Confirm Password"
            formikProps={props}
          />
      </Grid>
    </Grid>
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
