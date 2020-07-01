import React, { Component } from 'react';
import Search from '../layouts/Search';

class Sidebar extends Component {
  constructor() {
     super();
     this.state = {
       search: ''
     };
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
      </div>
    );
  }
}

export default Sidebar;
