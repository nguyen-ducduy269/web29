"use client";

interface Props {
  setFilterStatus: (value: string) => void;
}

const Status = (props: Props) => {
  return (
    <>
      <td className="status">
        <select
          onClick={(e: any) => {
            props.setFilterStatus(e.target.value);
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
