import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const LoginForm = () => {
  return (
    <div>
      <h1>Login Form</h1>
      <Formik 
        initialValues= {{ firstName: '', lastName: '', email: '' }}
        validationSchema= {Yup.object({
          firstName: Yup.string()
            .max(15, '15 characters se kam ka naam likh')
            .required('Required field hai ye, chup chaap bhaar'),
          lastName: Yup.string()
            .max(20, '20 chars se kam ka naam likh')
            .required('Required field hai ye bhi'),
          email: Yup.string()
            .email('valid email daal')
            .required('Ye bhi required hai')
        })}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >  
        <Form>
          <label htmlFor='firstName'>First Name: </label>
          <Field name='firstName' type='text' placeholder='naam daal yha' />
          <ErrorMessage name='firstName' /> <br />
          
          <label htmlFor='lastName'>Last Name: </label>
          <Field name='lastName' type='text' />
          <ErrorMessage name='lastName' /> <br />
          
          <label htmlFor='email'>Email: </label>
          <Field name='email' type='text' />
          <ErrorMessage name='email' /> <br />
          
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default LoginForm;