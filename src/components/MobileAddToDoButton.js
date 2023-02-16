import { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import ModalWindowContext from "../context/modalWindow/ModalWindowContext";

const MobileAddToDoButton = () => {
  const { handleOpen } = useContext(ModalWindowContext);

  return (
    <IconButton
      size="large"
      sx={{
        position: "fixed",
        backgroundColor: "#2ebaee",
        left: "80%",
        top: "90%",
        display: {
          sm: "inlineBlock",
          md: "none",
        },
      }}
      onClick={handleOpen}
    >
      <AddIcon fontSize="large" sx={{ color: "white" }} />
    </IconButton>
  );
};

export default MobileAddToDoButton;
