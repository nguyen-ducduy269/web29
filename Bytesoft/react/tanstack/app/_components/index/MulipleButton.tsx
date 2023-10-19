import React from "react";

interface Props {
  id: string;
  setOpenPopUp: (value: any) => void;
}

const MulipleButton = (props: Props) => {
  return (
    <button
      className="mutiple-button"
      onClick={() => {
        props.setOpenPopUp(props.id);
      }}
    >
      +
    </button>
  );
};

export default MulipleButton;
