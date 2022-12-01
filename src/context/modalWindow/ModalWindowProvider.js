import {useState} from "react";
import ModalWindowContext from "./ModalWindowContext";

const ToDoProvider = ({children}) => {
    const [open, setOpen] = useState(false);

    return <ModalWindowContext.Provider value={{open, setOpen}}>{children}</ModalWindowContext.Provider>;
};

export default ToDoProvider;