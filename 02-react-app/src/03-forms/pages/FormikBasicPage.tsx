
import { useFormik, FormikErrors } from 'formik'
import '../styles/styles.css'

interface FormValues {
    firstName: string
    lastName: string
    email: string
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, email, lastName }: FormValues) => {
        const errors: FormikErrors<FormValues> = {}

        if (!firstName) {
            errors.firstName = 'Este campo es necesario'
        } else if (firstName.length >= 15 || firstName.length <= 3) {
            errors.firstName = 'Debe ser menor a 15 caracteres y mayor a 3'
        }

        if (!lastName) {
            errors.lastName = 'Este campo es necesario'
        } else if (lastName.length >= 20 || lastName.length <= 3) {
            errors.lastName = 'Debe ser menor a 20 caracteres y mayor a 3'
        }

        if (!email) {
            errors.email = 'Este campo es necesario'
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Debe ser un email válido'
        }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic Page</h1>
            <hr />
            <form
                noValidate
                onSubmit={handleSubmit}
            >
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="First Name"
                    type="text"
                    value={values.firstName}
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
