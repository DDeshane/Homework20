import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getBooks}>
      <select name="formSelect">
        <option value="">Select List</option>
        <option value="hardcover-fiction">Hardcover Fiction</option>
        <option value="hardcover-nonfiction">Hardcover Non-Fiction</option>
        <option value="paperback-nonfiction">Paperback Non-Fiction</option>
      </select>
      <button className="form_button">Search</button>
   
    </form>
  );
};

export default Form;
