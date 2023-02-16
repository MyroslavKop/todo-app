import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <>
      <Header />
      <Box>
        <Container sx={{ paddingBottom: "50px" }}>
          <ToDoList />
        </Container>
      </Box>
    </>
  );
}

export default App;
