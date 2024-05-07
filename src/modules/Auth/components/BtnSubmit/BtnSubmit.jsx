import { Button, Spinner } from "@chakra-ui/react";
import React from "react";
export const BtnSubmit = ({ 
   isPending,
   text, 
} ) => {
   return (
    <Button
      borderRadius="8px"
      fontSize="16px"
      fontWeight="600"
      lineHeight="32px"
      letterSpacing="-0.006em"
      width="100%"
      // height="56px"
      background={isPending ? "gray.200" : "#0067F4"}
      color={isPending ? "gray.500" : "white"}
      _hover={{ background: "blue.600" }}
      _active={{ background: "blue.700" }}
      _disabled={{ background: "gray.200" }}
      type="submit" 
      disabled={isPending}
   >
      {isPending ? (
         <Spinner
           thickness='4px'
           speed='0.65s'
           emptyColor='gray.200'
           color='blue.500'
           size="md"
         />
      ) : text}
    </Button>
   ) 
}