import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import todo from "../../data";
import ToDoContext from "./ToDoContext";

const ToDoProvider = ({ children }) => {
  const [toDo, setToDo] = useState(
    JSON.parse(localStorage.getItem("todos")) || todo
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <ToDoContext.Provider value={{ toDo, setToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};

ToDoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ToDoProvider;
