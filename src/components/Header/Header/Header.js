import {useContext} from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProgressBar from "./ProgressBar";
import Container from "@mui/material/Container";
import ToDoModalWindow from "../ModalWindow/ToDoModalWindow";

import ToDoContext from "../../../context/todo/ToDoContext";
import ModalWindowContext from "../../../context/modalWindow/ModalWindowContext";
import * as style from "./styles";


const Header = () => {
    const {toDo} = useContext(ToDoContext);
    const {setOpen} = useContext(ModalWindowContext);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const categoryValue = (category) => {
        const result = toDo.filter(item => item.category === category);
        return result.length;
    };

    return (<Box sx={style.header}>
        <Box sx={style.leftSideWrapper}>
            <Container sx={style.leftSideBlock}>
                <Typography
                    variant="h1"
                    sx={style.headerTitle}>Your Things</Typography>
            </Container>
        </Box>
        <Box sx={style.rightSideWrapper}>
            <Container sx={style.rightSideBlock}>
                <Box
                    sx={{
                        gap: {
                            xs: "30px",
                            sm: "70px"
                        }
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center">
                        <Typography
                            variant="p"
                            sx={style.tasksNumber}>{categoryValue("Personal")}</Typography>
                        <Typography
                            variant="p"
                            sx={style.tasksTitle}>Personal</Typography>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection="column">
                        <Typography
                            variant="p"
                            sx={style.tasksNumber}>{categoryValue("Business")}</Typography>
                        <Typography
                            variant="p"
                            sx={style.tasksTitle}>Business</Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        justifyContent: {
                            xs: "flex-start",
                            sm: "center"
                        }
                    }}
                    display="flex"
                    alignItems="center"
                    gap="20px">
                    <ToDoModalWindow handleClose={handleClose} handleOpen={handleOpen}/>
                    <ProgressBar/>
                </Box>
            </Container>
        </Box>
    </Box>);
};

export default Header;
