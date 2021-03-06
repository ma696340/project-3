import React from "react";
import "./styles.css"


function Form(props){
return (
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search now and build your library</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn badge-pill mt-3 mb-5" id="searchBtn">
        Search
        </button>
    </div>
  </form>
  </div>
);
}

export default Form;