import React from "react";

const ListGroup = props => {
  const { items, textProp, valueProp, selectedItem, onItemSelect } = props;
  //input: a list of items
  //events: when a list item is chosen, the list of movies should be filtered
  return (
    <div>
      <ul className="list-group">
        {items.map(item =>
          <li /* bracket notation to access props dynamically */
            key={item[valueProp]}
            /*  dynamic class if item matches selected item */
            className={
              item === selectedItem ? "list-group-item active" : "list-group-item"
            }
            onClick={() => onItemSelect(item)}
          >
            {item[textProp]}
          </li>
        )}
        {/* <li class="list-group-item active">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li> */}
      </ul>
    </div>
  );
};
//defaultProps
ListGroup.defaultProps = {
  textProp: "name", //= item.name
  valueProp: "_id" //= item._id
};
export default ListGroup;
