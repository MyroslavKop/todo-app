import {useContext} from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

import ToDoContext from "../context/todo/ToDoContext";
import ModalWindowContext from "../context/modalWindow/ModalWindowContext";

const ToDoList = () => {
    const {toDo, setToDo} = useContext(ToDoContext);
    const {setOpen} = useContext(ModalWindowContext);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleDelete = (id) => () => {
        const newToDo = [...toDo].filter(item => item.id !== id);
        setToDo(newToDo);
    };

    const handleStatus = (id) => () => {
        const newToDo = [...toDo].filter(item => {
            if (item.id === id) {
                item.status = !item.status;
            }
            return item;
        });
        setToDo(newToDo);
    };

    return (
        <>
            <Grid container spacing={3} mt={2}>
                {toDo.map(({category, title, description, id, status, color}) => (
                    <Grid item xs={12} sm={6} key={id} sx={{position: "relative"}}>
                        <Card
                            sx={{
                                borderLeft: `8px solid ${color}`,
                                minHeight: "200px",
                                backgroundColor: status && "#bdbdbd"
                            }}>
                            <CardContent>
                                <Box display="flex" alignItems="center">
                                    <Checkbox
                                        checked={status}
                                        disabled={status}
                                        sx={{padding: 0, marginRight: 1}}
                                        onChange={handleStatus(id)}/>
                                    <Typography
                                        variant="h5"
                                        component="div"
                                        sx={{
                                            textDecoration: status && "line-through",
                                            fontSize: {
                                                xs: "20px",
                                                sm: "25px"
                                            }
                                        }}>{title}</Typography>
                                </Box>
                                <Typography
                                    sx={{mb: 1.5, fontSize: 15}}
                                    color="text.secondary">{category}</Typography>
                                <Typography
                                    variant="body2"
                                    fontSize={18}>{description}</Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton
                                    disabled={status}
                                >
                                    <EditIcon
                                        sx={{color: status ? "gray" : "black"}}
                                        fontSize="medium"/>
                                </IconButton>
                                <IconButton
                                    onClick={handleDelete(id)}>
                                    <DeleteIcon
                                        sx={{color: "red"}}
                                        fontSize="medium"/>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>))}
                <IconButton
                    size="large"
                    sx={{
                        position: "fixed",
                        backgroundColor: "#2ebaee",
                        left: "80%",
                        top: "90%",
                        display: {
                            xs: "inlineBlock",
                            sm: "none"
                        }
                    }}
                    onClick={handleOpen}>
                    <AddIcon fontSize="large" sx={{color: "white"}}/>
                </IconButton>
            </Grid>

        </>
    );
};

export default ToDoList;
