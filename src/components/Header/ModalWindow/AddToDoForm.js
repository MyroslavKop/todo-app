import {useContext, useState} from "react";
import {v4 as uuidv4} from "uuid";
import {randomColor} from "randomcolor";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";

import ToDoContext from "../../../context/todo/ToDoContext";
import ModalWindowContext from "../../../context/modalWindow/ModalWindowContext";
import {modalWindowForm} from "./styles";


const AddToDoForm = () => {
    const {toDo, setToDo} = useContext(ToDoContext);
    const {setOpen} = useContext(ModalWindowContext);

    const [titleValue, setTitleValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [category, setCategory] = useState("");

    const handleTitleChange = ({target: {value}}) => {
        setTitleValue(value);
    };

    const handleDescriptionChange = ({target: {value}}) => {
        setDescriptionValue(value);
    };

    const handleCategoryChange = ({target: {value}}) => {
        setCategory(value);

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (titleValue.trim().length === 0 || descriptionValue.trim().length === 0) {
            return;
        }
        setToDo([...toDo, {
            title: titleValue,
            description: descriptionValue,
            category: category,
            id: uuidv4(),
            status: false,
            color: randomColor({
                luminosity: "light",
            })
        }]);
        setOpen(preValue => !preValue);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={modalWindowForm}>
                <FormControl variant="standard">
                    <Select
                        onChange={handleCategoryChange}
                        color="secondary"
                        displayEmpty
                        value={category}
                        inputProps={{"aria-label": "Without label"}}>
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value="Personal">Personal</MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    variant="standard"
                    placeholder="Title"
                    value={titleValue}
                    onChange={handleTitleChange}
                    InputProps={{
                        endAdornment: titleValue.trim().length > 0 &&
                            <IconButton onClick={() => setTitleValue("")}>
                                <ClearIcon color="secondary"/>
                            </IconButton>
                    }}/>
                <TextField
                    variant="standard"
                    placeholder="Description"
                    value={descriptionValue}
                    onChange={handleDescriptionChange}
                    InputProps={{
                        endAdornment: descriptionValue.trim().length > 0 &&
                            <IconButton onClick={() => setDescriptionValue("")}>
                                <ClearIcon color="secondary"/></IconButton>
                    }}/>
                <Button variant="contained" type="submit">ADD YOUR THING</Button>
            </Box>
        </form>
    );
};

export default AddToDoForm;