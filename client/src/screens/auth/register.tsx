import { Box } from "@chakra-ui/react";
import ChakraInput from "../../componants/input";
import ChakraButton from "../../componants/button";
import { Formik } from "formik";
import * as Yup from "yup";
import { User } from "../../constants/types";

const Register = () => {

    const initialValues: Partial<User> = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    const validationSchema = () => Yup.object().shape({
        first_name: Yup.string().required(),
        last_name: Yup.string().required(),
        email: Yup.string().email().required(),
        password: Yup.string().required()
    })

    const onSubmit = (values:any) => {
        console.log(values)
    }

    return (
        <Box className="bg-light p-5" display="flex" alignItems="center" flexDirection="column" style={{ height: "100vh" }} >
            <h1 className="p-5" >Register</h1>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
                {({ values, errors, setFieldValue, handleSubmit }) => (
                    <Box className="col-lg-6 col-12 pl-5" >
                        <h4 className="p-1 pb-3" >Register</h4>
                        <ChakraInput type="text" onChange={(e) => setFieldValue("first_name", e.target.value)} value={values.first_name} error={errors.first_name || ''} placeholder="First Name" />
                        <ChakraInput type="text" onChange={(e) => setFieldValue("last_name", e.target.value)} value={values.last_name} error={errors.last_name || ''} placeholder="Last Name" />
                        <ChakraInput type="text" onChange={(e) => setFieldValue("email", e.target.value)} value={values.email} error={errors.email || ''} placeholder="Email" />
                        <ChakraInput type="password" onChange={(e) => setFieldValue("password", e.target.value)} value={values.password} error={errors.password || ''} placeholder="Password" />
                        <ChakraButton type="submit" alignSelf="stretch" onClick={()=> handleSubmit()} >Register</ChakraButton>
                    </Box>
                )}
            </Formik>
        </Box>
    );
}

export default Register;