import React from "react";

///// import hooks
import { useFetchingData } from "@/app/_hooks/useFetchingData";

interface Props {
  indexItem: number;
  setIndexItem: (value: number) => void;
  setTypeItem: (value: string) => void;
}

const ControlList = (props: Props) => {
  const { data: projectData } = useFetchingData(
    "http://localhost:4000/projectType"
  );
  if (!projectData) return;

  return (
    <>
      <ul className="control-list">
        {projectData.map((project: any, index: number) => {
          return (
            <li
              className={
                props.indexItem == index
                  ? "control-list__item active"
                  : "control-list__item"
              }
              onClick={() => {
                props.setIndexItem(index);
                props.setTypeItem(project.type);
              }}
            >
              {project.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ControlList;
