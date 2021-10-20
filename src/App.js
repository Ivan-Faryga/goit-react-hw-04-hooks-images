import React, { useState, useEffect } from "react";
import "./App.css";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import { fetchPictures } from "./services/apiServise";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ("idle");
// ("pending");
// ("resolved");
// ("rejected");

export default function App() {
  
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loader setLoader] = useState(false);
  const [showModal setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('');
  const [error, setError] = useState(null);

  // state = {
  //   query: "",
  //   page: 1,
  //   images: [],
  //   loader: false,
  //   showModal: false,
  //   modalImg: "",
  //   error: null,
  // };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.query;
    const nextSearchQuery = this.state.query;
    if (prevSearchQuery !== nextSearchQuery) {
      this.downloadImages();
    }

    if (prevState.page !== this.state.page && this.state.page !== 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  const handleSubmit = (searchData) => {
    this.setState({ query: searchData, page: 1 });
  };

  downloadImages = (e) => {
    const { query, page } = this.state;
    this.toggleLoader();

    fetchPictures(query, page)
      .then((response) => {
        if (response.length === 0) {
          return toast.error(`no results for ${this.state.query}`, {
            theme: "colored",
            autoClose: 4000,
          });
        }
        return this.setState((prevState) => ({
          images: [...prevState.images, ...response],
          page: prevState.page + 1,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.toggleLoader());
  };

  resetState = () => {
    this.setState({
      images: [],
      page: 1,
    });
  };

  handleChosenImg = (e) => {
    e.preventDefault();
    this.toggleModal();
    this.setState({ modalImg: e.target.dataset.img });
  };

  toggleLoader = () => {
    this.setState((prevState) => ({ loader: !prevState.loader }));
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  
    return (
      <div className="App">
        <SearchBar
          query={query}
          // handleChange={this.handleChangeQuery}
          onSubmit={handleSubmit}
          reset={resetState}
        />
        {!!images.length && (
          <>
            <ImageGallery images={images} onClick={handleChosenImg} />
            <Button addImgs={downloadImages} btnName={"Load more"} />
          </>
        )}
        {showModal && (
          <Modal onCloseModal={toggleModal}>
            <img src={modalImg} alt="" />
          </Modal>
        )}
        {loader && <Loader />}
        <ToastContainer position="top-right" autoClose={2500} theme="dark" />
      </div>
    );
};

