import { useState, useEffect, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToDoContext from "../context/todo/ToDoContext";

const CircularProgressWithLabel = (props) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} size={50} />
      <Box
        sx={{
          display: "flex",
          top: 0,
          left: 100,
          bottom: 0,
          right: 0,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{
            fontSize: "16px",
            color: "white",
            opacity: 0.7,
          }}
        >
          {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
          {props.value.length === 0
            ? "No tasks"
            : // eslint-disable-next-line react/destructuring-assignment,react/prop-types
              `${Math.round(props.value)}% completed`}
        </Typography>
      </Box>
    </Box>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const { toDo } = useContext(ToDoContext);

  useEffect(() => {
    const completedToDo = toDo.filter((elem) => elem.status === true);
    if (toDo.length === 0) setProgress(toDo);
    else {
      setProgress((completedToDo.length / toDo.length) * 100);
    }
  }, [toDo]);

  return <CircularProgressWithLabel value={progress} />;
};

export default ProgressBar;
