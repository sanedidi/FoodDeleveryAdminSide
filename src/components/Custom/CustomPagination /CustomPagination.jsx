import { Pagination, Stack } from "@mui/material";
import React from "react";

export const CustomPagination = ({ count, page, onPageChange }) => {
  return (
    <Stack>
      <Pagination
        count={count}
        page={page}
        color="primary"
        onChange={(event, value) => onPageChange}
        variant="outlined"
        shape="rounded"
      />
    </Stack>
  );
};

export default CustomPagination;
