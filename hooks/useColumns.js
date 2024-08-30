import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColumnsConfig } from "@/src/Redux/table/tableConfigSlice";

export const useColumns = (tableId, initialColumns) => {
  const dispatch = useDispatch();
  const savedConfig = useSelector((state) => state.tableConfig[tableId]);
  const [columns, setColumns] = useState(savedConfig || initialColumns);

  useEffect(() => {
    if (savedConfig) {
      setColumns(savedConfig);
    }
  }, [savedConfig]);

  const handleColumnsChange = useCallback(
    (newColumns) => {
      if (!Array.isArray(newColumns)) {
        console.error("newColumns should be an array");
        return;
      }
      setColumns(newColumns);
      dispatch(setColumnsConfig({ tableId, columns: newColumns }));
    },
    [dispatch, tableId]
  );

  return { columns, handleColumnsChange };
};
