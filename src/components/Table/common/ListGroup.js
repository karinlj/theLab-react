import React from "react";

const ListGroup = props => {
  //input: a list of items, the selected item
  //events: when a list item is chosen, the list of movies should be filtered
  const { items, onItemSelect, textProp, valueProp, selectedItem } = props;

  return (
    <ul className="nav nav-pills nav-fill">
      {items.map(item =>
        <li key={item[valueProp]} className="nav-item" onClick={() => onItemSelect(item)}>
          <a className={item === selectedItem ? "nav-link active" : "nav-link"}>
            {/* using default props instead for reusability*/}
            {item[textProp]}
          </a>
        </li>
      )}
    </ul>
  );
};
//defaultProps
ListGroup.defaultProps = {
  textProp: "name", //= item.name
  valueProp: "_id" //= item._id
};
export default ListGroup;
