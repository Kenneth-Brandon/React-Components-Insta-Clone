// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = ({ setSearchTerms, searchPost }) => {
  const onEnterKeyDown = event => {
    event.preventDefault();
    event.key === "Enter" && searchPost();
  };

  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-2x" />
        <h3>Whosgram</h3>
      </div>
      <form className="search-form">
        <i className="fas fa-search" />
        <input
          type="text"
          placeholder="Search"
          onChange={event => setSearchTerms(event.target.value)}
          onKeyDown={event => {
            event.key === "Enter" && onEnterKeyDown(event);
          }}
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
