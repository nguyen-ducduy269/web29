import React from "react";
import { useFetchingData } from "@/app/useFetchingData";

const ControlList = ({ indexItem, setIndexItem }: any) => {
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
                indexItem == index
                  ? "control-list__item active"
                  : "control-list__item"
              }
              onClick={() => setIndexItem(index)}
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
