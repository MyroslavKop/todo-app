import {useContext} from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";

import ModalWindowContext from "../../../context/modalWindow/ModalWindowContext";
import * as style from "./styles";
import AddToDoForm from "./AddToDoForm";

const ToDoModalWindow = ({handleOpen, handleClose}) => {
    const {open} = useContext(ModalWindowContext);

    return (<div>
            <Button
                onClick={handleOpen}
                variant="contained"
                size="large"
            sx = {{
                display: {
                    xs: "none",
                    sm: "block"
                }
            }}>ADD TASK</Button>
            <Modal
                open={open}
                onClose={handleClose}>
                <Box sx={style.modalWindow}>
                    <Box position="relative">
                        <Typography
                            textAlign="center"
                            sx={style.modalWindowTitle}
                            variant="h3">Add new thing</Typography>
                        <IconButton
                            onClick={handleClose}
                            sx={style.closeModalWindow}>
                            <ClearIcon color="primary"/>
                        </IconButton>
                    </Box>
                    <Box sx={style.modalWindowBox}>
                        <RateReviewOutlinedIcon
                            color="primary"
                            fontSize="large"
                            sx={{width: "100%", height: "100%"}}/>
                    </Box>
                    <AddToDoForm/>
                </Box>
            </Modal>
        </div>
    );
};

export default ToDoModalWindow;