import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

// import components
import AddJob from "./components/AddJob.tsx";
import More from "./components/More.tsx";
import Table from "./components/Table.tsx";
import { Task } from "./store/actions/indexActions.tsx";

// import css
import { Header, Container, LeftJob, AddButton, RightJob } from "./App.ts";

function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);
  const tasks = useSelector((state: any) => state.Task.data);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("http://localhost:3000/data");
  }, []);

  const dispatchData = (value: any) => {
    dispatch(Task(value));
  };

  const fetchData = (url: any) => {
    fetch(`${url}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatchData(data);
      });
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
    dispatchData(newArray);
  };

  return (
    <>
      <Header>Quản lý công việc</Header>
      <Container>
        <LeftJob
          className={isDisplay ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
        >
          {isDisplay ? (
            <AddJob setIsDisplay={setIsDisplay} selectedItem={selectedItem} />
          ) : (
            false
          )}
        </LeftJob>

        <RightJob
          className={
            isDisplay
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <AddButton
            onClick={() => {
              setIsDisplay(true);
              setSelectedItem(null);
            }}
          >
            Thêm công việc
          </AddButton>
          <More />

          <Table
            handleBtn={(e) => {
              setSelectedItem(e);
              setIsDisplay(true);
            }}
            deleteBtn={deleteBtn}
          />
        </RightJob>
      </Container>
    </>
  );
}

export default App;
