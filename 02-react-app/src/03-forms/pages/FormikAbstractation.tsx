
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation Page</h1>
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
                            <MyTextInput
                                label='First Name'
                                name='firstName'
                                placeholder='John' />

                            <MyTextInput
                                label='Last Name'
                                name='lastName'
                                placeholder='Doe Smith' />

                            <MyTextInput
                                type='email'
                                label='Email'
                                name='email'
                                placeholder='johndoe@mail.com' />

                            <MySelect name="jobType" as='select' label={'Job Type'}>
                                <option value="">Select a job type</option>
                                <option value="designer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="product">Product Manager</option>
                                <option value="other">Other</option>
                            </MySelect>

                            <MyCheckbox
                                label='Terms & Conditions'
                                name='terms'
                            />

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
