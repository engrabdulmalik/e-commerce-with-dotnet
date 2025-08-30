import { Box, Container, Typography } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Container maxWidth="xl" sx={{ mt: 12 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
