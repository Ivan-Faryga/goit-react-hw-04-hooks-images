import React, { useState } from "react";
import { toast } from "react-toastify";

export default function SearchBar({ onSubmit, reset }) {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e) => {
    // const { name, value } = e.currentTarget;
    // this.setState({
    //   [name]: value,
    // });
    setQuery(e.currentTarget);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.query.trim())
      return toast.warn("Please enter your request", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    onSubmit(query);
    setQuery("");
    reset({ page: 1 });
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          name="query"
          value={query}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChangeQuery}
        />
      </form>
    </header>
  );
}
