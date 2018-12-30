import React from "react";

const ListGroup = props => {
  //input: a list of items, the selected item
  //events: when a list item is chosen, the list of movies should be filtered
  const { items, onItemSelect, textProp, valueProp, selectedItem } = props;

  return (
    /*   <ul className="list-group">
      {items.map(item =>
        <li
          key={item[valueProp]}
          //how to make first default item blue??
          className={item == selectedItem ? "list-group-item active" : "list-group-item"}
          onClick={() => onItemSelect(item)}
        >
          {item[textProp]}
        </li>
      )}
    </ul> */

    <ul className="nav nav-pills nav-fill">
      {items.map(item =>
        <li
          key={item[valueProp]}
          //how to make first default item blue??
          className="nav-item"
          onClick={() => onItemSelect(item)}
        >
          <a className={item == selectedItem ? "nav-link active" : "nav-link"}>
            {/*   {item.name}   using default props instead for reusability*/}
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

{
  /* <ul class="nav nav-tabs">
<li class="nav-item">
  <a class="nav-link active" href="#">Active</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
  <a class="nav-link" href="#">Link</a>
</li>
<li class="nav-item">
  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</li>
</ul> */
}
{
  /*   <li className="list-group-item active" onClick={onItemSelect}>
        All species
      </li>
      <li className="list-group-item" onClick={onItemSelect}>
        Elephants
      </li>
      */
}
