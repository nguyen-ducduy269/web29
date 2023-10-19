import React from "react";
import MultipleItems from "./MultipleItems";
import { useFetchingData } from "@/app/_hooks/useFetchingData";

interface Props {
  typeItem: string;
  setOpenItem: (value: boolean) => void;
  setOpenPopUp: (value: any) => void;
}

const TabItem = (props: Props) => {
  const { data: data } = useFetchingData(
    `http://localhost:3001/project?type=${props.typeItem}`
  );
  if (!data) return;

  return (
    <div className="tab-item">
      <MultipleItems
        setOpenItem={props.setOpenItem}
        typeItem={props.typeItem}
        data={data}
        setOpenPopUp={props.setOpenPopUp}
      />
    </div>
  );
};

export default TabItem;
