import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

function Button({ addImgs }) {
  return (
    <button onClick={addImgs} className={s.loadMoreBtn}>
      Load more..
    </button>
  );
}

Button.propTypes = {
  addImgs: PropTypes.func.isRequired,
};

export default Button;
