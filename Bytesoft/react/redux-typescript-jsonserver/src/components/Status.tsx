"use client";

interface Props {
  setFilter: (value: any) => void;
}

const Status = (props: Props) => {
  return (
    <>
      <td className="status">
        <select
          onChange={(e) => {
            props.setFilter((filter: any) => ({
              ...filter,
              status: e.target.value,
            }));
          }}
        >
          <option value={""}>All</option>
          <option value={"Active"}>Active</option>
          <option value={"Hide"}>Hide</option>
        </select>
      </td>
    </>
  );
};

export default Status;
