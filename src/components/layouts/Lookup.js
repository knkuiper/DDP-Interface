import React, { Component, Fragment } from 'react';
import SourceData from '../data/data.json';

class Example1 extends Component {
    state = {
      value: "",
      sourceData: SourceData,
      filterData: SourceData
    };

    filterList = e => {
      const updatedList = this.state.sourceData.filter(item => {
        return item.provider.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      });
      this.setState({ filterData: updatedList });
    };

    render() {
      const searchBox = (
        <input
          type="text"
          onChange={this.filterList}
        />
      );
      const selectBox = this.state.filterData.map(indexlist => (
        <li key={indexlist.provider}>{indexlist.provider}</li>
      ));

      return (
        <Fragment>
          <h2>Step 1</h2>
          {searchBox}
          <ul>{selectBox}</ul>
        </Fragment>
      );
    }
  }

export default Example1;
