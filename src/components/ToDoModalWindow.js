import { useContext } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import ModalWindowContext from "../context/modalWindow/ModalWindowContext";
import AddToDoForm from "./AddToDoForm";

const ToDoModalWindow = () => {
  const { open, handleOpen, handleClose } = useContext(ModalWindowContext);

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        size="large"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        ADD TASK
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              xs: 250,
              sm: 400,
            },
            backgroundColor: "#46529d",
            boxShadow: 24,
            p: 4,
            borderRadius: "5%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <Box position="relative">
            <Typography
              textAlign="center"
              sx={{
                color: "white",
                fontSize: "24px",
              }}
              variant="h3"
            >
              Add new thing
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                padding: "0",
                right: "13px",
                top: "3px",
              }}
            >
              <ClearIcon color="primary" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "50px",
              height: "50px",
              margin: "0 auto",
              borderRadius: "50%",
              border: "2px solid #2ebaee",
              padding: "10px",
            }}
          >
            <RateReviewOutlinedIcon
              color="primary"
              fontSize="large"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
          <AddToDoForm />
        </Box>
      </Modal>
    </div>
  );
};

export default ToDoModalWindow;
