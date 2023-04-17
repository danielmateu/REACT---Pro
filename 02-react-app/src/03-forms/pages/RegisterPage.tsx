import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'

export const RegisterPage = () => {

    const { formData, onChange, resetForm, isValidEmail, name, email, password, repeatPassword } = useForm({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    })
    // const { name, email, password, repeatPassword } = registerData

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // TODO: Validar formulario
        

        console.log(formData)
    }

    return (
        <div>
            <h1>Register Page</h1>
            <hr />
            <form
                noValidate
                onSubmit={onSubmit}
            >
                <input
                    name='name'
                    onChange={onChange}
                    placeholder="Name"
                    type="text"
                    value={name}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />

                {
                    name.trim().length <= 0 && <span>Este campo es necesario</span>
                }

                <input
                    name='email'
                    onChange={onChange}
                    placeholder="Email"
                    type="email"
                    value={email}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />

                {
                    !isValidEmail(email) && <span>El email no es válido</span>
                }
                <input
                    name='password'
                    onChange={onChange}
                    placeholder="Password"
                    type="password"
                    value={password}
                    className={`${password.trim().length <= 0 && 'has-error'}`}
                />
                {
                    password.trim().length <= 0 && <span>Este campo es necesario</span>
                }
                {
                    password.trim().length > 0 && password.trim().length < 6 && <span>El password debe tener al menos 6 caracteres</span>
                }
                <input
                    name='repeatPassword'
                    onChange={onChange}
                    placeholder="Repeat Password"
                    type="password"
                    value={repeatPassword}
                />
                {
                    repeatPassword.trim().length <= 0 && <span>Este campo es necesario</span>
                }
                {/* las contraseñas deben ser iguales */}
                {
                    password.trim() !== repeatPassword.trim() && <span>Las contraseñas deben ser iguales</span>
                }

                <button
                    type="submit"
                >Register</button>

                <button
                    type="button"
                    onClick={resetForm}
                >Reset</button>
            </form>
        </div>
    )
}

// export default RegisterPage