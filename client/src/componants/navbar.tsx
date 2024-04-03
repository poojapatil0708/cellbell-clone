import { Box, Heading, Text } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
    return (
        <Box width="100%">
            <Box>
                <Heading color="red" >
                    CELLBELL
                </Heading>
            </Box>
            <Outlet/>
        </Box>
    );
}

export default Navbar;