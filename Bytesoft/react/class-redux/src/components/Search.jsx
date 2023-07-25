import React from "react";

import { connect } from "react-redux";
import * as action from "../actions/index";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value,
    });
  };

  onSearch = () => {
    this.props.onSearch(this.state.keyword);
  };

  render() {
    var { keyword } = this.state;
    return (
      <>
        <input
          name="keyword"
          className="main-input"
          type="text"
          placeholder="Nhập từ khóa..."
          value={keyword}
          onChange={this.onChange}
        ></input>
        <button onClick={this.onSearch}>Tìm</button>
      </>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {};
// };

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(action.searchTask(keyword));
    },
  };
};
export default connect(null, mapDispatchToProps)(Search);
