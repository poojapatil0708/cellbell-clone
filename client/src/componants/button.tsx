import { Box, Button, ButtonProps } from "@chakra-ui/react";

const ChakraButton = (props: ButtonProps) => {
    return (
            <Button size="sm" {...props} my={props.my || 3}  alignSelf="stretch" />
    );
}

export default ChakraButton;