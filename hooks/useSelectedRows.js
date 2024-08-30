import { useState, useCallback } from "react";

export const useSelectedRows = (data) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleSelectAll = useCallback(() => {
    setSelectAll((prevSelectAll) => {
      const newSelectAll = !prevSelectAll;
      setSelectedRows(newSelectAll ? data.map((row) => row.id) : []);
      return newSelectAll;
    });
  }, [data]);

  const handleRowSelect = useCallback((id) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = prevSelectedRows.includes(id)
        ? prevSelectedRows.filter((rowId) => rowId !== id)
        : [...prevSelectedRows, id];
      setSelectAll(newSelectedRows.length === data.length);
      return newSelectedRows;
    });
  }, [data]);

  return { selectedRows, selectAll, handleSelectAll, handleRowSelect };
};
