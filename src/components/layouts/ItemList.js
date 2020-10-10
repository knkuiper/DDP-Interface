import React, { Component } from "react";
import Item from "../layouts/Item.js";

class ItemList extends Component {
  render() {
    let items = this.props.filteredList.map((item) => {
      return <div key={item.id}>
        <Item
          Platform={item.Platform}
          Visibility={item.Visibility}
          Temporality={item.Temporality}
          File={item.File}
          File_format={item.File_format}
          Tags={item.Tags}
          Filepath={item.Filepath}
          Elements={item.Elements}
          Description={item.Description}
          Example_screenshot={item.Example_screenshot} />
      </div>
    });
    return (
      <>
        {items}
      </>
    )
  }
}

export default ItemList;
