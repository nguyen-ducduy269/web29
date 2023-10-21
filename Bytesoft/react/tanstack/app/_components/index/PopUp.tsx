import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { Dispatch } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

///// import hooks
import { useFetchingDetailsProject } from "@/app/_hooks/useFetchingDetailsProject";

const PopUp = ({
  id,
  setOpenPopUp,
}: {
  id: string;
  setOpenPopUp: Dispatch<string | null>;
}) => {
  const { data: details } = useFetchingDetailsProject(id);

  return (
    <div className="popup">
      <div className="main-pop">
        <Image src={details?.[0]?.imagine} width={575} height={409} alt="" />
        <div className="title">
          <b>{details?.[0]?.popUpTitle}</b>
        </div>
        <div className="main-content">
          <div className="content">
            <div className="name">Details about project:</div>
            <div className="dis">{details?.[0]?.disscriptionText}</div>
          </div>

          <div className="content">
            <div className="name">Details about time:</div>
            <div className="dis">{details?.[0]?.time}</div>
          </div>
        </div>
      </div>
      <div className="layout"></div>
      <div className="close-pop" onClick={() => setOpenPopUp(null)}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{ fontSize: 40, color: "white" }}
        />
      </div>
    </div>
  );
};

export default PopUp;
