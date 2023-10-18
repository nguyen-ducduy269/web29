import { useFetchingData } from "@/app/_hooks/useFetchingData";
import React from "react";

interface Props {
  setOpenItem: (value: boolean) => void;
  id: string;
  setOpenPopUp: (value: any) => void;
}

const MulipleButton = (props: Props) => {
  const { data: product } = useFetchingData(
    `http://localhost:4000/project?id=${props.id}`
  );
  if (!product) return;

  return (
    <button
      className="mutiple-button"
      onClick={() => {
        props.setOpenItem(true);
        props.setOpenPopUp(product[0]);
      }}
    >
      +
    </button>
  );
};

export default MulipleButton;
