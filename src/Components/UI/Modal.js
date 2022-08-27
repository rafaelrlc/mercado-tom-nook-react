import classes from "./Modal.module.css";
import { Fragment } from "react";
import { ReactDOM } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      <div className={classes.backdrop}></div>
      <div className={classes.modal}>
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;
