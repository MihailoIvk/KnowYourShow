import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
  };
  return (
    <div className="header">
      <div className="logo">
        {" "}
        <Link to="/">KnowYourShow.</Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search" />{" "}
          </button>
        </form>
      </div>
      <div className="logo-image">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Header;
