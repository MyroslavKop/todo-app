import { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ProgressBar from "./ProgressBar";
import ToDoModalWindow from "./ToDoModalWindow";
import ToDoContext from "../context/todo/ToDoContext";
import background from "../assets/img/background.jpg";

const getCategory = (category, array) => {
  const result = array.filter((item) => item.category === category);
  return result.length;
};

const Header = () => {
  const { toDo } = useContext(ToDoContext);

  return (
    <Box
      sx={{
        minHeight: "180px",
        backgroundImage: `url(${background})`,
        display: "flex",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          borderBottom: "10px solid #2ebaee",
          flexGrow: 1,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: {
                xs: "35px",
                sm: "56px",
              },
              fontWeight: "200",
              textAlign: "center",
              color: "white",
            }}
          >
            Your Things
          </Typography>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#14213d",
          opacity: 0.8,
          flexGrow: 1,
          borderBottom: "10px solid transparent",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <Box
            sx={{
              gap: {
                xs: "30px",
                sm: "70px",
              },
            }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography
                variant="p"
                sx={{
                  fontSize: "36px",
                  color: "white",
                }}
              >
                {getCategory("Personal", toDo)}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Personal
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Typography
                variant="p"
                sx={{
                  fontSize: "36px",
                  color: "white",
                }}
              >
                {getCategory("Business", toDo)}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "20px",
                  color: "white",
                }}
              >
                Business
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              justifyContent: {
                xs: "flex-start",
                sm: "center",
              },
            }}
            display="flex"
            alignItems="center"
            gap="20px"
          >
            <ToDoModalWindow />
            <ProgressBar />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
