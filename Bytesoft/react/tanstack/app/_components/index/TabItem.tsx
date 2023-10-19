import React from "react";
import MultipleItems from "./MultipleItems";

interface Props {
  setOpenPopUp: (value: any) => void;
  typeItem: string;
}

const TabItem = (props: Props) => {
  return (
    <div className="tab-item">
      <MultipleItems
        setOpenPopUp={props.setOpenPopUp}
        typeItem={props.typeItem}
      />
    </div>
  );
};

export default TabItem;
