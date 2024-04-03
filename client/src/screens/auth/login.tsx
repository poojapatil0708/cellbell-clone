import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import ChakraInput from "../../componants/input";

const LogIn = () => {
    return (
        <Grid h='100px' gap={4} p={5} >
            <GridItem display="flex" justifyContent="center" colSpan={12}>
                <Text fontSize='4xl'>Log In</Text>
            </GridItem>
            <GridItem p={5} colSpan={6} >
                Login Form
                <ChakraInput />
                <ChakraInput />
            </GridItem>
            <GridItem display="flex" justifyContent="left" colSpan={6} >
                New Customer? Register
            </GridItem>
        </Grid>
    );
}

export default LogIn;