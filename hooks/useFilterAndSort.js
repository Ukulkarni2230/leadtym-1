import { useState, useCallback } from "react";

export const useFilterAndSort = (initialFilter = "", initialSortField = "") => {
  const [filter, setFilter] = useState(initialFilter);
  const [sortField, setSortField] = useState(initialSortField);

  const handleFilterClick = useCallback((field) => {
    setFilter((prevFilter) => {
      const newFilter = prevFilter === field ? "" : field;
      return newFilter;
    });
  }, []);

  const handleSortClick = useCallback((field) => {
    setSortField(field);
  }, []);

  return { filter, sortField, setFilter, handleFilterClick, handleSortClick };
};
