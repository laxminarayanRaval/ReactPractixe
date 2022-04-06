import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react";

import css from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={css.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={css.modal}>
      <div className={css.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClickBackdrop} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
