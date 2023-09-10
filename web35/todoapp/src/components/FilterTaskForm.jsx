import React from "react";
import FilterOption from "./TaskFilterOption";

const FilterForm = ({ filterValue, onFilterValueChange }) => {
  return (
    <form className="filter-task-form">
      <FilterOption
        label="Tất cả"
        value="all"
        checked={filterValue === "all"}
        onChange={onFilterValueChange}
      />
      <FilterOption
        label="Hoàn thành"
        value="done"
        checked={filterValue === "done"}
        onChange={onFilterValueChange}
      />
      <FilterOption
        label="Chưa hoàn thành"
        value="doing"
        checked={filterValue === "doing"}
        onChange={onFilterValueChange}
      />
    </form>
  );
};

export default FilterForm;
