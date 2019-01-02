import React from "react";

const AddItem = props => {
  //input: state -inputContent
  //events: onChange, onSubmit
  const { inputContent, onInputChange, onFormSubmit } = props;

  return (
    <div>
      <form className="todo-form" onSubmit={onFormSubmit}>
        <label htmlFor="">Add new Item:</label>
        <br />

        <input type="text" onChange={onInputChange} value={inputContent} />
      </form>
    </div>
  );
};

export default AddItem;
