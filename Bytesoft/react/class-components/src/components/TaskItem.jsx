import React from "react";

class TaskItem extends React.Component {
  onUpdateStatus = () => {
    this.props.onUpdateStatus(this.props.task.id);
  };

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };

  onUpdate = () => {
    this.props.onUpdate(this.props.task.id);
  };

  render() {
    var { task, index } = this.props;

    return (
      <>
        <tr>
          <td className="stt">{index + 1}</td>
          <td className="name">{task.name}</td>
          <td className="status">
            <p className="status-active" onClick={this.onUpdateStatus}>
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
export default TaskItem;
