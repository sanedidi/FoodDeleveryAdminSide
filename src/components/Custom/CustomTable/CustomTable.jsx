import Table from "rc-table";
import clsx from "clsx";
import s from "./CustomTable.module.scss";
import { Skeleton, Stack } from "@chakra-ui/react";

export const CustomTable = ({
  columns = [],
  data = [],
  isLoading,
  className,
  ...props
}) => {
  return (
    <div className={clsx(s.tableWrapper, className)}>
      {isLoading || !data.length ? (
        <Stack className={s.skeletonWrapper}>
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
          <Skeleton height="40px" />
        </Stack>
      ) : (
        <Table
          className={clsx(s.table)}
          columns={columns}
          data={data}
          {...props}
        />
      )}
    </div>
  );
};
