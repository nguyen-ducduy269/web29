import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
// import * as actions from "./store/actions/indexActions.tsx";
import axios from "axios";

// import components
import AddJob from "./components/AddJob.tsx";
import More from "./components/More.tsx";
import Table from "./components/Table.tsx";

function App() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Kích hoạt");
  const [isDisplay, setIsDisplay] = useState(false);
  const tasks = useSelector((state: any) => state.Task.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`http://localhost:3000/data?`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: "TASK", payload: data });
      });
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(),
      name: name,
      status: status,
    };

    tasks.push(newItem);
    dispatch({ type: "TASK", payload: tasks });

    axios
      .post("http://localhost:3000/data", newItem)
      .then((response) => console.log("response.data", response.data))
      .then((error) => console.log("error", error));

    setIsDisplay(false);
    setName("");
    setStatus("Kích hoạt");
  };

  // const handleEdit = (e: any) => {
  //   console.log(e);

  //   const findID = tasks.find((el: any) => el.id === e.id);
  //   console.log("findID", findID);

  //   const indexOfTasks = tasks.indexOf(findID);
  //   console.log("indexOfTasks", indexOfTasks);

  //   const tempData = { ...tasks };
  //   console.log("tempData", tempData);

  //   tempData[indexOfTasks] = e;
  //   // dispatch({ type: "TASK", payload: tempData });

  //   axios
  //     .put("http://localhost:3000/data", tempData)
  //     .then((response) => console.log(response.data))
  //     .then((error) => console.log(error));
  // };

  const editBtn = (e: any) => {
    const findID = tasks.find((el: any) => el.id === e.id);
    setIsDisplay(true);
    setName(findID.name);
    setStatus(findID.status);

    // const findID = tasks.find((el: any) => el.id === e.id);
    console.log("findID", findID);

    const indexOfTasks = tasks.indexOf(findID);
    console.log("indexOfTasks", indexOfTasks);

    const tempData = [...tasks];
    console.log("tempData", tempData);

    tempData[indexOfTasks] = e;
    dispatch({ type: "TASK", payload: tempData });

    // axios
    //   .put("http://localhost:3000/data", tempData)
    //   .then((response) => console.log(response.data))
    //   .then((error) => console.log(error));
  };

  const deleteBtn = (e: any) => {
    let indexFilter = tasks.findIndex((item: any) => item.id === e);
    const newArray = tasks.filter((item: any) => {
      return item != tasks[indexFilter];
    });

    axios
      .delete(`http://localhost:3000/data/${e}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    dispatch({ type: "TASK", payload: newArray });
  };

  return (
    <>
      <Header>Quản lý công việc</Header>
      <Container>
        <LeftJob>
          {isDisplay ? (
            <AddJob
              name={name}
              setName={setName}
              status={status}
              setStatus={setStatus}
              handleBtn={handleSubmit}
              // handleEdit={handleEdit}
              setIsDisplay={setIsDisplay}
            />
          ) : (
            false
          )}
        </LeftJob>

        <RightJob>
          <AddButton
            onClick={() => {
              setName("");
              setStatus("Kích hoạt");
              setIsDisplay(true);
            }}
          >
            Thêm công việc
          </AddButton>
          <More />

          <Table handleBtn={editBtn} deleteBtn={deleteBtn} />
        </RightJob>
      </Container>
    </>
  );
}

export default App;

const Header = styled.h1`
  width: 100%;
  font-size: 45px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 20px;

  .add {
    height: 50px;
    line-height: 50px;
    background-color: bisque;
    padding-left: 10px;
  }

  .form {
    display: block;
    height: 190px;
    border: 1px solid bisque;
    padding: 10px 10px;
  }
  label {
    font-size: 20px;
    font-weight: 700;
  }
`;

const LeftJob = styled.div`
  width: 30%;
  position: relative;
  #name {
    width: 97%;
    height: 40px;
    border-radius: 8px;
    padding-left: 5px;
  }
  select {
    width: 100%;
    height: 40px;
    border-radius: 8px;
  }
  .button {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .btn_add {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
  }
  .btn_remove {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: red;
    color: white;
  }
`;

const AddButton = styled.button`
  position: relative;
  width: 150px;
  height: 30px;
  background-color: blue;
  color: white;
`;

const RightJob = styled.div`
  width: 60%;
  height: 276.6px;
  button {
    background-color: #0000ffc7;
    font-size: 14px;
    text-align: center;
    height: 35px;
    line-height: 30px;
    color: white;
    padding: 0 5px;
    margin-bottom: 0;
  }

  .reduce {
    margin-left: 20px;
  }
  .main-input {
    width: 300px;
    height: 30px;
  }

  table {
    margin-top: 10px;
  }
  table,
  tr,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }

  thead {
    font-weight: 700;
  }

  thead .stt {
    width: 50px;
  }

  thead .name {
    width: 300px;
  }

  thead .status {
    width: 150px;
  }

  thead .activity {
    width: 200px;
  }
  td {
    height: 50px;
    text-align: center;
  }

  .add-input {
    width: 90%;
    height: 70%;
  }

  tbody select {
    width: 90%;
    height: 70%;
  }

  tbody .status {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .status-active {
    border: 1px solid;
    width: 70px;
    font-size: 12px;
    background-color: #4caf50;
    color: white;
  }

  tbody .button button {
    padding: 0px 5px;
    text-align: center;
  }

  tbody .button .btn_edit {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: coral;
    color: white;
    margin-right: 10px;
  }

  tbody .button .btn_remove {
    width: 70px;
    height: 30px;
    text-align: center;
    background-color: red;
    color: white;
  }
`;
