import React from "react";
import FilterOption from "./TaskFilterOption";
import { useTodo } from "../hooks/useTodo";

const FilterForm = () => {
  const filterValue = useTodo().filterValue;

  return (
    <form className="filter-task-form">
      <FilterOption
        label="Tất cả"
        value="all"
        checked={filterValue === "all"}
      />
      <FilterOption
        label="Hoàn thành"
        value="done"
        checked={filterValue === "done"}
      />
      <FilterOption
        label="Chưa hoàn thành"
        value="doing"
        checked={filterValue === "doing"}
      />
    </form>
  );
};

export default FilterForm;
