import React from "react";
import { connect } from "react-redux";
import * as action from "./../actions/index";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "",
      status: true,
    };
  }

  componentWillMount() {
    if (this.props.itemEditing && this.props.itemEditing.id !== null) {
      this.setState({
        id: this.props.itemEditing.id,
        name: this.props.itemEditing.name,
        status: this.props.itemEditing.status,
      });
    } else {
      this.onClear();
    }
  }

  // chuyển itemEditing và thay đổi nội dung itemEditing ứng với button tương ứng
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      this.setState({
        id: nextProps.itemEditing.id,
        name: nextProps.itemEditing.name,
        status: nextProps.itemEditing.status,
      });
    } else if (nextProps && nextProps.itemEditing === null) {
      this.setState({
        id: "",
        name: "",
        status: true,
      });
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  };

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if (name === "status") {
      value = target.value === "true" ? true : false;
    }
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSaveTask(this.state);

    this.onClear();
    this.onCloseForm();
  };

  onClear = () => {
    this.setState({
      name: "",
      status: true,
    });

    this.onCloseForm();
  };

  render() {
    var { id } = this.state;
    return (
      <>
        <div className="left">
          <p className="add">
            {id !== "" ? "Sửa công việc" : "Thêm công việc"}
          </p>

          <form className="form" onSubmit={this.onSubmit}>
            <label htmlFor="name">Tên: </label>
            <br />
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            />

            <label>Trạng thái: </label>
            <select
              required="required"
              name="status"
              value={this.state.status}
              onChange={this.onChange}
            >
              <option value={null}></option>
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </select>

            <div className="button">
              <button className="btn_add" type="submit">
                {id !== "" ? "Sửa" : "Thêm"}
              </button>
              <button className="btn_remove" onClick={this.onClear}>
                Hủy bỏ
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isDisplay: state.isDisplay,
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSaveTask: (task) => {
      dispatch(action.saveTask(task));
    },

    onCloseForm: () => {
      dispatch(action.closeForm());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
