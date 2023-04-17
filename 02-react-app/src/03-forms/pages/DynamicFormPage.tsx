

import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { MySelect, MyTextInput } from '../components'
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}

for (const input of formJson) {
    initialValues[input.name] = input.value

    if (!input.validations) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }

        if(rule.type === 'minLength') {
            schema = schema.min((rule as any).value, `Debe tener al menos ${(rule as any).value} caracteres`)
        }

        if(rule.type === 'email') {
            schema = schema.email('Debe ser un email válido')
        }


        // ... otras reglas de validación
    }

    requiredFields[input.name] = schema 
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic Form Page</h1>
            {/* {JSON.stringify(initialValues)} */}
            <hr />

            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={(values, {
                    setSubmitting,
                    resetForm
                }) => {
                    console.log({
                        values,
                        setSubmitting,
                        resetForm
                    })
                }}

            >
                {(formik) => (
                    <Form
                        noValidate
                    >
                        {formJson.map(({ type, name, placeholder, label, options }) => {

                            if (type === 'input' || type === 'password' || type === 'email') {

                                return (
                                    <MyTextInput
                                        key={name}
                                        type={type as any}
                                        name={name}
                                        placeholder={placeholder}
                                        label={label}
                                    />
                                )
                            } else if (type === 'select') {
                                return (
                                    <MySelect
                                        key={name}
                                        name={name}
                                        label={label}

                                    >
                                        <option value=''>Seleccione...</option>
                                        {
                                            options?.map(({ id, label, description }) => (
                                                <option key={id} value={id}>{label}</option>
                                            ))

                                        }
                                    </MySelect>
                                )
                            }

                            // return <span>Type: {type} no es soportado</span>
                            throw new Error(`Type: ${type} no es soportado`)
                        })}

                        <button
                            type='submit'
                        >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

