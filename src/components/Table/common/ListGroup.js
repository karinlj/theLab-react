import React from "react";

const ListGroup = props => {
  //input: a list of items, the selected item
  //events: when a list item is chosen, the list of movies should be filtered
  const { items, onItemSelect, textProp, valueProp, selectedItem } = props;

  return (
    <ul className="list-group">
      {items.map(item =>
        <li
          key={item[valueProp]}
          className={item === selectedItem ? "list-group-item active" : "list-group-item"}
          onClick={() => onItemSelect(item)}
        >
          {/*   {item.name}   using default props instead for reusability*/}
          {item[textProp]}
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
{
  /*   <li className="list-group-item active" onClick={onItemSelect}>
        All species
      </li>
      <li className="list-group-item" onClick={onItemSelect}>
        Elephants
      </li>
      */
}
