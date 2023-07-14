import React from "react";

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

export default Search;
