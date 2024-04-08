import { Formik } from "formik";
import ChakraButton from "../../componants/button";
import ChakraInput from "../../componants/input";
import { User } from "../../constants/types";
import * as Yup from "yup";

const LogIn = () => {

    const initialValues: Partial<User> = {
        email: '',
        password: ''
    }

    const validationSchema = () => Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    const onSubmit = (values: any) => {
        console.log(values)
    }

    return (
        <div className="bg-light p-5" style={{ height: "100vh" }} >
            <div className="row row-cols-sm-2 row-cols-md-12 pb-5">
                <div className="col-lg-12 p-2" >
                    <h2 className="d-flex align-items-center justify-content-center" >Log In</h2>
                </div>
            </div>

            <div className="row row-cols-sm-2 row-cols-md-12 pb-5">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                    {({ values, errors, setFieldValue, handleSubmit }) => (
                        <div className="col p-5" >
                            <h4 className="p-1 pb-3">Log In</h4>
                            <ChakraInput type="text" onChange={(e) => setFieldValue("email", e.target.value)} value={values.email} error={errors.email || ''} placeholder="Email" />
                            <ChakraInput type="password" onChange={(e) => setFieldValue("password", e.target.value)} value={values.password} error={errors.password || ''} placeholder="Password" />
                            <ChakraButton type="submit" onClick={() => handleSubmit()} >LogIn</ChakraButton>
                        </div>
                    )}
                </Formik>
                <div className="col p-5">
                    <h4>New Customer? Register</h4>
                    <p>
                        Sign up for early Sale access plus tailored new arrivals,
                        trends and promotions. To opt out, click unsubscribe in our emails.
                    </p>
                    <button type="submit" className="btn btn-primary" >Register</button>
                </div>
            </div>
        </div>
    );
}

export default LogIn;