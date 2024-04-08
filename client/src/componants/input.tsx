import { Box, Input, InputGroup, InputProps } from "@chakra-ui/react";

interface CustomProps extends InputProps{
    error?: any,
    placeholder:string
}

const ChakraInput = (props:CustomProps) => {


    return (
        <Box display="flex" p={1} >
            <InputGroup size='md'>
                <Input {...props} />
            </InputGroup>
        </Box>
    );
}

export default ChakraInput;