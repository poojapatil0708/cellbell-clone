import { Box, Input } from "@chakra-ui/react";

const ChakraInput = ({ placeholder }: { placeholder: string }) => {

    return(
        <Box display="flex" p={1} >
            <Input placeholder={placeholder} />
        </Box>
    );
}

export default ChakraInput;