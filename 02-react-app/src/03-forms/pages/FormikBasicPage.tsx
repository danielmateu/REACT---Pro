
import { useFormik } from 'formik'

import '../styles/styles.css'

export const FormikBasicPage = () => {

    const { handleChange, values, handleSubmit } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        }
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
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={values.firstName}
                />
                <span>
                    Este campo es necesario
                </span>

                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={values.lastName}
                />

                <span>
                    Este campo es necesario
                </span>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={values.email}
                />

                <span>Este campo es necesario</span>
                <span>Debe ser un email válido</span>

                <button
                    type="submit"
                >
                    Submit
                </button>
            </form>

        </div>
    )
}
