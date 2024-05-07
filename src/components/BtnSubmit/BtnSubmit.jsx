import { Button, Spinner } from "@chakra-ui/react";
import React from "react";
export const BtnSubmit = ({
  onClick = () => {},
  isPending,
  type,
  height,
  text = "+",
}) => {
  return (
    <Button
      borderRadius="8px"
      fontSize="16px"
      fontWeight="600"
      lineHeight="32px"
      letterSpacing="-0.006em"
      // width="100%"
      height={height ? height : "40px"}
      background={isPending ? "gray.200" : "#0067F4"}
      color={isPending ? "gray.500" : "white"}
      _hover={{ background: "blue.600" }}
      _active={{ background: "blue.700" }}
      _disabled={{ background: "gray.200" }}
      disabled={isPending}
      type={type ? type : "submit"}
      onClick={onClick}
    >
      {isPending ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
      ) : (
        text
      )}
    </Button>
  );
};
