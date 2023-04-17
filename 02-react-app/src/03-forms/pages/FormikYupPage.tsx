
import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

export const FormikYupPage = () => {

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        // validate
        validationSchema: Yup.object({
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
        })
    })

    return (
        <div>
            <h1>Formik Yup Page</h1>
            <hr />
            <form
                noValidate
                onSubmit={handleSubmit}
            >
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={values.firstName}
                    onBlur={handleBlur}
                />
                {
                    touched.firstName && errors.firstName && <span>{errors.firstName}</span>
                }

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={values.lastName}
                    onBlur={handleBlur}
                />

                {
                    touched.lastName && errors.lastName && <span>{errors.lastName}</span>
                }

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />

                {
                    touched.email && errors.email && <span>{errors.email}</span>
                }

                <button type="submit">
                    Submit
                </button>
            </form>

        </div>
    )
}
