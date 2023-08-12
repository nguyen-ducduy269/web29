import React from "react";
import styled from "styled-components";

// import components
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isDisplay: false, // đóng mở các task
      taskEditing: null, // xác định task nào đang sửa
      filter: {
        name: "",
        status: -1,
      },
      keyword: "",
      sortBy: "name",
      sortValue: 1,
    };
  }

  // hiển thị thành phần đang được tải từ localStorage
  componentWillMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      const tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  generateID() {
    return (
      this.s4() +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      "-" +
      this.s4() +
      this.s4() +
      this.s4()
    );
  }

  // mở task thêm công việc
  onToggleForm = () => {
    if (this.state.isDisplay && this.state.taskEditing !== null) {
      this.setState({
        isDisplay: true,
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplay: !this.state.isDisplay,
        taskEditing: null,
      });
    }
  };

  // đóng task
  onCloseForm = () => {
    this.setState({
      isDisplay: false,
    });
  };

  // thêm công việc
  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === "") {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    this.setState({
      tasks: tasks,
      taskEditing: null,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log("data", data);
  };

  // update status
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks,
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  // xóa
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    this.onCloseForm();
  };

  // update công việc
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];

    this.setState({
      taskEditing: taskEditing,
    });
    this.onShowForm();
  };

  onShowForm = () => {
    this.setState({
      isDisplay: true,
    });
  };

  findIndex = (id) => {
    var { tasks } = this.state;
    let result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  };

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      },
    });
  };

  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  };

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };

  render() {
    var { tasks, isDisplay, taskEditing, filter, keyword, sortBy, sortValue } =
      this.state;

    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }

    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }

    if (sortBy === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sortValue;
        else if (a.name < b.name) return -sortValue;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sortValue;
        else if (a.status < b.status) return sortValue;
        else return 0;
      });
    }

    var elmTaskForm = isDisplay ? (
      <TaskForm
        onCloseForm={this.onCloseForm}
        onSubmit={this.onSubmit}
        task={taskEditing}
      />
    ) : (
      ""
    );
    return (
      <>
        <Header>Quản lý công việc</Header>
        <Container>
          <LeftJob
            className={isDisplay ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
          >
            {elmTaskForm}
          </LeftJob>

          <RightJob
            className={
              isDisplay
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <AddButton onClick={this.onToggleForm}>Thêm công việc</AddButton>
            {/* Search-Sort */}
            <Control
              onSearch={this.onSearch}
              onSort={this.onSort}
              sortBy={sortBy}
              sortValue={sortValue}
            />
            {/* Table */}
            <TaskList
              tasks={tasks}
              onUpdateStatus={this.onUpdateStatus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </RightJob>
        </Container>
      </>
    );
  }
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
    height: 220px;
    border: 1px solid bisque;
    padding: 10px 10px;
  }
  label {
    font-size: 20px;
    font-weight: 700;
  }
`;

const LeftJob = styled.div`
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
    position: relative;
  }

  .main-input {
    width: 300px;
    height: 34px;
  }

  table {
    width: 100%;
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
    margin-top: 16px;
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
