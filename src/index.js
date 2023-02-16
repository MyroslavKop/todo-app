import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import App from "./App";
import ToDoProvider from "./context/todo/ToDoProvider";
import ModalWindowProvider from "./context/modalWindow/ModalWindowProvider";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <ModalWindowProvider>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </ModalWindowProvider>
  </ThemeProvider>
);
