import React from "react";
import { useFetchingData } from "@/app/useFetchingData";

interface Props {
  indexItem: number;
  setIndexItem: (value: number) => void;
}

const ControlList = (props: Props) => {
  const { data: projectData } = useFetchingData(
    "http://localhost:4000/project"
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
              onClick={() => props.setIndexItem(index)}
            >
              {project.mainTitle}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ControlList;
