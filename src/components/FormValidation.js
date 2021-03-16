import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextFields from './TextFields'


const FormValidation = () => {
    const validate = Yup.object({
        firstName: Yup.string().min(3, "Too short").max(50, "Too Long").required("required"),
        lastName: Yup.string().min(3, "Too short").max(50, "Too Long").required("required"),
        email: Yup.string().email("invalid email").required("Email is required"),
        password: Yup.string().min(6, "password must be at least 6 characters").required("password is required"),
        conformPassword: Yup.string().oneOf([Yup.ref('password'), null], "password must match").required("conform password is required"),

    })
    return (
        <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: "",
            password: "",
            conformPassword: ""
        }}
            validationSchema={validate}
            onSubmit={values => {
                alert("Data Submited")
            }}
        >
            {formik => (
                <div>
                    {console.log(formik.resetForm)}
                    <h1 className="my-4 font-weight-bold-display-4">Sign Up</h1>
                    <Form>
                        <TextFields label="First Name" name="firstName" type="text" />
                        <TextFields label="Last Name" name="lastName" type="text" />
                        <TextFields label="E-mail" name="email" type="email" />
                        <TextFields label="Password" name="password" type="password" />
                        <TextFields label="Conform Password" name="conformPassword" type="password" />
                        <button className="btn btn-success mt-3" >Submit</button>
                        <button className="btn btn-danger mt-3 ml-3" onClick={() => formik.resetForm(formik.initialValues)} >Reset</button>
                    </Form>
                </div>
            )}
        </Formik>
    )
}

export default FormValidation
