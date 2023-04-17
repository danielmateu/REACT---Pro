
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
                    email: ''
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
                })}
            >
                {(formik) => {
                        return (
                            <Form>
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type='text'placeholder='John'/>
                                <ErrorMessage name="firstName" component='span' />

                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type='text' placeholder='Doe Smith'/>
                                <ErrorMessage name="lastName" component='span' />

                                <label htmlFor="email">Email</label>
                                <Field name="email" type='email' placeholder='johndoe@mail.com'/>
                                <ErrorMessage name="email" component='span' />

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
