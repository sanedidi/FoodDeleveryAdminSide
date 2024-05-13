import Table from "rc-table";
import clsx from "clsx";
import s from "./CustomTable.module.scss";
export const CustomTable = ({
  columns = [],
  data = [],
  className,
  ...props
}) => {
  return (
    <Table
      className={clsx(s.table, className)}
      columns={columns}
      data={data}
      {...props}
    />
  );
};
