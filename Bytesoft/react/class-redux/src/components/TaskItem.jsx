import React from "react";
import { connect } from "react-redux";
import * as action from "../actions/index";

class TaskItem extends React.Component {
  onDelete = () => {
    this.props.onDeleteTask(this.props.task.id);
    this.props.onCloseForm();
  };

  onUpdate = () => {
    this.props.onOpenForm();
    this.props.onEditTask(this.props.task);
  };

  render() {
    var { task, index } = this.props;

    return (
      <>
        <tr>
          <td className="stt">{index + 1}</td>
          <td className="name">{task.name}</td>
          <td className="status">
            <p className="status-active">
              {task.status === true ? "Kích hoạt" : "Ẩn"}
            </p>
          </td>
          <td className="activity button">
            <button className="btn_edit" onClick={this.onUpdate}>
              Sửa
            </button>
            <button className="btn_remove" onClick={this.onDelete}>
              Xóa
            </button>
          </td>
        </tr>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteTask: (id) => {
      dispatch(action.deleteTask(id));
    },
    onCloseForm: () => {
      dispatch(action.closeForm());
    },
    onEditTask: (task) => {
      dispatch(action.editTask(task));
    },
    onOpenForm: () => {
      dispatch(action.openForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
