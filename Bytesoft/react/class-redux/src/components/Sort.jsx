import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import * as action from "../actions/index";

class Sort extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  onOpen = () => {
    this.setState({
      isOpen: true,
    });
  };

  onClose = () => {
    this.setState({
      isOpen: false,
    });
  };

  onClick = (sortBy, sortValue) => {
    this.props.onSort({
      by: sortBy,
      value: sortValue,
    });
    this.onClose();
  };
  render() {
    var { isOpen } = this.state;
    var openForm = isOpen ? (
      <Arranged>
        <ul>
          <li onClick={() => this.onClick("name", 1)}>
            <a type="button">
              <span>Từ A - Z</span>
            </a>
          </li>
          <li onClick={() => this.onClick("name", -1)}>
            <a type="button">
              <span>Từ Z - A</span>
            </a>
          </li>
          <li onClick={() => this.onClick("status", 1)}>
            <a type="button" value="Kích hoạt">
              <span>Trạng thái Kích hoạt</span>
            </a>
          </li>
          <li onClick={() => this.onClick("status", -1)}>
            <a type="button" value="Ẩn">
              <span>Trạng thái Ẩn</span>
            </a>
          </li>
        </ul>
      </Arranged>
    ) : (
      ""
    );
    return (
      <>
        <button className="reduce" onClick={this.onOpen}>
          Sắp xếp
        </button>
        {openForm}
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSort: (sort) => {
      dispatch(action.sortTask(sort));
    },
  };
};
export default connect(null, mapDispatchToProps)(Sort);

const Arranged = styled.div`
  min-width: 160px;
  min-height: 200px;
  background-color: white;
  border: 1px solid black;
  position: absolute;
  left: 48%;
  display: flex;
  align-items: center;
  ul {
    width: 100%;
    height: 100%;
    padding: 5px;
    list-style: none;
    li {
      height: 30px;
      line-height: 30px;
      margin-bottom: 10px;
    }
  }
`;
