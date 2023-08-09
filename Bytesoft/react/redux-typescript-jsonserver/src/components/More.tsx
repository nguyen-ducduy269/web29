import { useState } from "react";
import styled from "styled-components";
import Arrange from "./Arrange";
import { useDispatch } from "react-redux";
import data from "../../data/db.json";
const initValue = data.data;

const More = () => {
  const [arrange, setArrange] = useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (search != "" && search != null) {
      let newTask = [...initValue];
      newTask = newTask.filter((task: any) => {
        return task.name.toLowerCase().includes(search.toLowerCase());
      });
      dispatch({ type: "TASK", payload: newTask });
    }
    if (search == "" || search == null) {
      dispatch({ type: "TASK", payload: initValue });
    }
  };

  return (
    <>
      <Mored>
        <input
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Tìm</button>
        <button className="reduce" onClick={() => setArrange(true)}>
          Sắp xếp
        </button>
        {arrange ? (
          <Arrange setArrange={setArrange} initValue={initValue} />
        ) : (
          false
        )}
      </Mored>
    </>
  );
};

export default More;

const Mored = styled.div`
  position: relative;
`;
