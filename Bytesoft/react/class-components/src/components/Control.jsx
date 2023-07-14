import React from "react";
import styled from "styled-components";

import Search from "./Search";
import Sort from "./Sort";

class Control extends React.Component {
  render() {
    return (
      <>
        <Mored>
          {/* Search */}
          <Search onSearch={this.props.onSearch} />
          {/* Sort */}
          <Sort
            onSort={this.props.onSort}
            sortBy={this.props.sortBy}
            sortValue={this.props.sortValue}
          />
        </Mored>
      </>
    );
  }
}

export default Control;

const Mored = styled.div`
  position: relative;
`;
