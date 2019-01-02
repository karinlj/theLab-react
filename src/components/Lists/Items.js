import React from "react";
import "./Lists.scss";

const Items = props => {
  //input: items-array
  //events: onDelete
  const { items, onDelete } = props;

  return (
    <div>
      {items.map(item =>
        <div className="collection-item" key={item.id}>
          <span>
            {item.content}
          </span>
          <button className="deleteBtn" onClick={() => onDelete(item.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Items;
