import React from "react";
import TaskItem from "./TaskItem";
import { connect } from "react-redux";

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterName: "",
      filterStatus: -1, // Tất cả : -1, Kích hoạt : 1, Ẩn : 0
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === "filterName" ? value : this.state.filterName,
      name === "filterStatus" ? value : this.state.filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    var { tasks } = this.props;
    var { filterName, filterStatus } = this.state;
    var elmTasks = tasks.map((task, index) => {
      return (
        <TaskItem
          key={task.id}
          index={index}
          task={task}
          onUpdateStatus={this.props.onUpdateStatus}
          onDelete={this.props.onDelete}
          onUpdate={this.props.onUpdate}
        />
      );
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
                  value={filterName}
                  onChange={this.onChange}
                ></input>
              </td>

              <td className="status">
                <select
                  name="filterStatus"
                  value={filterStatus}
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
  };
};
export default connect(mapStateToProps, null)(TaskList);
