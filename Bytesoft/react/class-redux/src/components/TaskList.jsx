import React from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";

import TaskItem from "./TaskItem";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: "",
      filterStatus: -1, // Tất cả : -1, Kích hoạt : 0, Ẩn : 1
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    const filter = {
      name: name === "filterName" ? value : this.state.filterName,
      status: name === "filterStatus" ? value : this.state.filterStatus,
    };
    this.props.onFilter(filter);
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks, filterTable, keyword, sort } = this.props;

    /////
    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return (
          task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
    }
    tasks = tasks.filter((task) => {
      if (filterTable.status === -1) {
        return task;
      } else {
        return task.status === (filterTable.status === 1 ? true : false);
      }
    });

    // search
    if (keyword) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
      });
    }

    //sort
    if (sort.by === "name") {
      tasks.sort((a, b) => {
        if (a.name > b.name) return sort.value;
        else if (a.name < b.name) return -sort.value;
        else return 0;
      });
    } else {
      tasks.sort((a, b) => {
        if (a.status > b.status) return -sort.value;
        else if (a.status < b.status) return sort.value;
        else return 0;
      });
    }

    var elmTasks = tasks.map((task, index) => {
      return <TaskItem key={task.id} index={index} task={task} />;
    });
    return (
      <>
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
                  name="filterName"
                  value={this.state.filterName}
                  onChange={this.onChange}
                ></input>
              </td>

              <td className="status">
                <select
                  name="filterStatus"
                  value={this.state.filterStatus}
                  onChange={this.onChange}
                >
                  <option value={-1}>Tất cả</option>
                  <option value={1}>Kích hoạt</option>
                  <option value={0}>Ẩn</option>
                </select>
              </td>
              <td className="activity"></td>
            </tr>

            {elmTasks}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable,
    keyword: state.search,
    sort: state.sort,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilter: (filter) => {
      dispatch(action.filterTable(filter));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
