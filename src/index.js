import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ToDoProvider from "./context/todo/ToDoProvider";
import {ThemeProvider} from "@mui/material/styles";
import ModalWindowProvider from "./context/modalWindow/ModalWindowProvider";
import theme from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <ModalWindowProvider>
            <ToDoProvider>
                <App/>
            </ToDoProvider>
        </ModalWindowProvider>
    </ThemeProvider>
);

