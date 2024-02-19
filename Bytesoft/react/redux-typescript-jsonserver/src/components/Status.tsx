"use client";

interface Props {
  setStatus: (value: string) => void;
  setReload: (value: number) => void;
  reload: number;
}

const Status = (props: Props) => {
  return (
    <>
      <td className="status">
        <select
          onClick={(e: any) => {
            props.setStatus(e.target.value);
            props.setReload(props.reload + 1);
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
