
import { Form, Formik } from 'formik'
import { MyTextInput } from '../components'
import * as Yup from 'yup'

import '../styles/styles.css'

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <hr />

            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    password: '',
                    repeatPassword: '',
                }}
                onSubmit={(values, { }) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .required('Este campo es requerido')
                        .min(3, 'Debe ser mayor a 3 caracteres')
                        .max(15, 'Debe ser menor a 15 caracteres'),
                    email: Yup.string()
                        .required('Este campo es requerido')
                        .email('Debe ser un email válido'),
                    password: Yup.string()
                        .required('Este campo es requerido')
                        .min(6, 'Debe ser mayor a 6 caracteres')
                        .max(20, 'Debe ser menor a 20 caracteres'),
                    repeatPassword: Yup.string()
                        .required('Este campo es requerido')
                        .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
                })}
            >
                {({handleReset}) => {
                    return (
                        <Form>
                            <MyTextInput
                                label='First Name'
                                name='firstName'
                                type='text'
                                placeholder='John'
                            />

                            <MyTextInput
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='johndoe@mail.com'
                            />

                            <MyTextInput
                                label='Password'
                                name='password'
                                type='password'
                                placeholder='Password'
                            />

                            <MyTextInput
                                label='Repeat Password'
                                name='repeatPassword'
                                type='password'
                                placeholder='Repeat Password'
                            />

                            <button
                                type="submit"
                            >Register</button>

                            <button
                                type="button"
                                onClick={handleReset}
                            >Reset</button>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

// export default RegisterPage