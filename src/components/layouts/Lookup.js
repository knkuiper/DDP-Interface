import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import SourceData from '../data/data.json';

class Example1 extends Component {
    state = {
      value: "",
      sourceData: SourceData,
      filterData: SourceData
    };

    filterList = e => {
      const updatedList = this.state.sourceData.filter(item => {
        return item.provider.toLowerCase().search(e.target.value.toLowerCase()) !== -1
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
      const selectBox = this.state.filterData.map(indexlist => {
        return (
          <div>
            <Card>
              <li key={indexlist.id}>
                {indexlist.provider}
              </li>
            </Card>
          </div>
        );
      });

      return (
        <>
          {searchBox}
          <ul>{selectBox}</ul>
        </>
      );
    }
  }

export default Example1;
