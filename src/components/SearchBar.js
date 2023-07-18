import React from "react";

const SearchBar = ({ SearchHanlder, ChangeInputHanlder }) => {
  return (
    <div className="searchBar input-group">
      <input
        type="text"
        className="form-control"
        onChange={ChangeInputHanlder}
      />
      <button className="btn btn-primary" onClick={SearchHanlder}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
