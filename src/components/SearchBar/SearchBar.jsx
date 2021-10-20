import React, { Component } from "react";
import { toast } from "react-toastify";

class SearchBar extends Component {
  state = {
    query: "",
  };

  handleChangeQuery = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
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
    this.props.onSubmit(this.state.query);
    this.setState({
      query: "",
    });
    this.props.reset({ page: 1 });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            name="query"
            value={this.state.query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeQuery}
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;
