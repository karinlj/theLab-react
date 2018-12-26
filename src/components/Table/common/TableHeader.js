import React, { Component } from "react";

class TableHeader extends Component {
  //TableHeader needs to know about the columns
  //Input: columns: array, sortColumn: object, onSort: function

  //for reusability
  raiseSort = path => {
    console.log("path", path);
    const sortColumnNew = { ...this.props.sortColumn };
    //if sortColumnNew.path = the same as the path we are getting here, we change the sort order
    if (sortColumnNew.path === path) {
      //sortColumnNew.order becomes asc or desc
      sortColumnNew.order = sortColumnNew.order === "asc" ? "desc" : "asc";
    } else {
      sortColumnNew.path = path;
      sortColumnNew.order = "asc";
    }
    this.props.onSort(sortColumnNew);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    //if column is diffrent from current sort column??
    if (column.path !== sortColumn.path) return null;
    //render different icons depending on the sort order
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;

    return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { columns } = this.props;

    return (
      <thead>
        <tr>
          {columns.map(column =>
            <th
              className="clickable"
              /* key is path or key */
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          )}
        </tr>
      </thead>
    );
  }
}
export default TableHeader;
