import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as action from "./actions/index";

// import components
import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortBy: "name",
      sortValue: 1,
    };
  }

  onToggleForm = () => {
    this.props.openForm();
    this.props.onClearTask({
      id: "",
      name: "",
      status: false,
    });
  };

  onCloseForm = () => {
    this.setState({
      isDisplay: false,
    });
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

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue,
    });
  };

  render() {
    var { sortBy, sortValue } = this.state;
    var { isDisplay } = this.props;

    // if (sortBy === "name") {
    //   tasks.sort((a, b) => {
    //     if (a.name > b.name) return sortValue;
    //     else if (a.name < b.name) return -sortValue;
    //     else return 0;
    //   });
    // } else {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status) return -sortValue;
    //     else if (a.status < b.status) return sortValue;
    //     else return 0;
    //   });
    // }

    var elmTaskForm = isDisplay ? <TaskForm /> : "";
    return (
      <>
        <Header>Quản lý công việc</Header>
        <Container>
          <LeftJob>{elmTaskForm}</LeftJob>

          <RightJob>
            <AddButton onClick={this.onToggleForm}>Thêm công việc</AddButton>
            {/* Search-Sort */}
            <Control />
            {/* Table */}
            <TaskList onFilter={this.onFilter} />
          </RightJob>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplay: state.isDisplay,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    openForm: () => {
      dispatch(action.openForm());
    },

    onClearTask: (task) => {
      dispatch(action.editTask(task));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

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
    position: relative;
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
