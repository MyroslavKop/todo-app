import { useContext } from "react";
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
import TextField from "@mui/material/TextField";
import CheckIcon from "@mui/icons-material/Check";
import ToDoContext from "../context/todo/ToDoContext";
import MobileAddButton from "./MobileAddToDoButton";
import useToDo from "../hooks/useToDo";

const ToDoList = () => {
  const { toDo, setToDo } = useContext(ToDoContext);
  const {
    edit,
    titleValue,
    descriptionValue,
    handleEdit,
    handleDelete,
    handleStatus,
    handleSave,
    handleTitleChange,
    handleDescriptionChange,
  } = useToDo();

  return (
    <Grid container spacing={3} mt={2}>
      {toDo.map(({ category, title, description, id, status, color }) => (
        <Grid item xs={12} sm={6} key={id} sx={{ position: "relative" }}>
          <Card
            sx={{
              borderLeft: `8px solid ${color}`,
              minHeight: "200px",
              backgroundColor:
                (status && "#bdbdbd") || (edit === id && "#46529d"),
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center">
                {edit === id ? (
                  <TextField
                    variant="standard"
                    placeholder="Description"
                    fullWidth
                    value={titleValue}
                    onChange={handleTitleChange}
                  />
                ) : (
                  <>
                    <Checkbox
                      checked={status}
                      disabled={status}
                      sx={{ padding: 0, marginRight: 1 }}
                      onChange={handleStatus(id, toDo, setToDo)}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        textDecoration: status && "line-through",
                        fontSize: {
                          xs: "20px",
                          sm: "25px",
                        },
                      }}
                    >
                      {title}
                    </Typography>
                  </>
                )}
              </Box>
              <Typography
                sx={{ mb: 1.5, fontSize: 15 }}
                color={edit === id ? "#49bbe7" : "#666666"}
              >
                {category}
              </Typography>
              {edit === id ? (
                <TextField
                  variant="standard"
                  placeholder="Description"
                  value={descriptionValue}
                  fullWidth
                  onChange={handleDescriptionChange}
                />
              ) : (
                <Typography variant="body2" fontSize={18}>
                  {description}
                </Typography>
              )}
            </CardContent>
            <CardActions>
              {edit === id ? (
                <IconButton
                  sx={{ backgroundColor: "#49bbe7" }}
                  onClick={handleSave(id, toDo, setToDo)}
                >
                  <CheckIcon sx={{ color: "white" }} />
                </IconButton>
              ) : (
                <>
                  <IconButton
                    disabled={status}
                    onClick={handleEdit(id, title, description)}
                  >
                    <EditIcon
                      sx={{ color: status ? "gray" : "black" }}
                      fontSize="medium"
                    />
                  </IconButton>
                  <IconButton onClick={handleDelete(id, toDo, setToDo)}>
                    <DeleteIcon sx={{ color: "red" }} fontSize="medium" />
                  </IconButton>
                </>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
      <MobileAddButton />
    </Grid>
  );
};

export default ToDoList;
