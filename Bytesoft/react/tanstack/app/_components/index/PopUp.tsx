import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

interface Props {
  indexItem: number;
  setOpenItem: (value: boolean) => void;
  openPopUp: number;
}

const PopUp = (props: Props) => {
  const { data: projectData } = useFetchingData(
    "http://localhost:4000/project"
  );
  if (!projectData) return;

  const popUpItem = projectData[props.indexItem].details.find(
    (t: any) => t.id === props.openPopUp
  );

  return (
    <div className="popup">
      <div className="main-pop">
        <Image src={popUpItem.popUp.imagine} width={575} height={409} alt="" />
        <div className="title">
          <b>{popUpItem.popUp.title}</b>
        </div>
        <div className="main-content">
          <div className="content">
            <div className="name">Details about project:</div>
            <div className="dis">{popUpItem.popUp.disscriptionText}</div>
          </div>

          <div className="content">
            <div className="name">Details about time:</div>
            <div className="dis">{popUpItem.popUp.time}</div>
          </div>
        </div>
      </div>
      <div className="layout"></div>
      <div className="close-pop" onClick={() => props.setOpenItem(false)}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          style={{ fontSize: 40, color: "white" }}
        />
      </div>
    </div>
  );
};

export default PopUp;
