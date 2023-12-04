import React from "react";
import Login from "./components/seguridad/Login";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme/Theme";
import RegistrarUsuario from "./components/seguridad/RegistrarUsuario";
import MenuNavBar from "./components/navegacion/MenuNavBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrdenCompra from './components/ordenCompra/OrdenCompra';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuNavBar />
        <Routes>
          <Route path="/" ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrar" element={<RegistrarUsuario />}></Route>
          <Route path="/pedido" element={<OrdenCompra />}></Route>
        </Routes>
      </Router>
      
        {/* <Login /> */}
        {/* <RegistrarUsuario /> */}
    </ThemeProvider>
  );
}

export default App;
