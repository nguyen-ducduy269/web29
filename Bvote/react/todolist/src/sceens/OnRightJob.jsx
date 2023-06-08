import React, { useState } from "react";
import { More } from "./More";
import { Tr } from "./Tr";
import { Status } from "./Status";

export const OnRightJob = ({ array, setArray, setUpdateJob }) => {
  const [search, setSearch] = useState("");

  return (
    <>
      <More
        setArray={(v) => {
          setArray(v);
        }}
        array={array}
      />

      <table>
        <thead>
          <tr>
            <td className="stt">STT</td>
            <td className="name">Tên</td>
            <td className="status">Trạng thái</td>
            <td className="activity">Hành động</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="stt"></td>
            <td className="name">
              <input
                className="add-input"
                type="text"
                onChange={(e) => setSearch(e.target.value)}
              ></input>
            </td>

            <Status array={array} setArray={setArray} />
            <td className="activity"></td>
          </tr>

          <Tr
            array={array}
            setArray={setArray}
            setUpdateJob={setUpdateJob}
            search={search}
          />
        </tbody>
      </table>
    </>
  );
};
