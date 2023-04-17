
import { Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikComponents = () => {

    

    return (
        <div>
            <h1>Formik Components Page</h1>
            <hr />

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values, { }) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required('Este campo es requerido')
                        .min(3, 'Debe ser mayor a 3 caracteres')
                        .max(15, 'Debe ser menor a 15 caracteres'),
                    lastName: Yup.string()
                        .required('Este campo es requerido')
                        .min(3, 'Debe ser mayor a 3 caracteres')
                        .max(20, 'Debe ser menor a 20 caracteres'),
                    email: Yup.string()
                        .required('Este campo es requerido')
                        .email('Debe ser un email válido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar los términos y condiciones'),
                    jobType: Yup.string()
                        .required('Este campo es requerido')
                        // .oneOf(['designer', 'developer', 'product'], 'Debe seleccionar un tipo de trabajo')
                        .notOneOf(['other'], 'Debe seleccionar un tipo de trabajo válido')
                })}
            >
                {(formik) => {
                    return (
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type='text' placeholder='John' />
                            <ErrorMessage name="firstName" component='span' />

                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type='text' placeholder='Doe Smith' />
                            <ErrorMessage name="lastName" component='span' />

                            <label htmlFor="email">Email</label>
                            <Field name="email" type='email' placeholder='johndoe@mail.com' />
                            <ErrorMessage name="email" component='span' />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name="jobType" as='select'>
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </Field>
                            <ErrorMessage name="jobType" component='span' />

                            <label>
                                <Field name="terms" type='checkbox' />
                                Terms & conditions
                            </label>
                            <ErrorMessage name="terms" component='span' />

                            <button type="submit">
                                Submit
                            </button>
                        </Form>
                    )
                }
                }
            </Formik>


        </div>
    )
}
