import { useState } from "react";
import PropTypes from "prop-types";
import ModalWindowContext from "./ModalWindowContext";

const ToDoProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ModalWindowContext.Provider
      value={{ open, setOpen, handleOpen, handleClose }}
    >
      {children}
    </ModalWindowContext.Provider>
  );
};

ToDoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToDoProvider;
