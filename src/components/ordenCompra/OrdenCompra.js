import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Articulos from "./articulos/Articulos";
import CarritoWeb from "./carritoWeb/CarritoWeb";
import useStyles from "../../theme/useStyles";
import { Grid } from "@mui/material";
//import axios from "axios";

 //const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
//const baseURL = "../temp/data.json";

const OrdenCompra = () => {
  const classes = useStyles();  

  //const [articulos, setArticulos] = useState(null);

  
  return (
    <Container container className={classes.containermt}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Articulos />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CarritoWeb />
        </Grid>
      </Grid>
    </Container>
  );
};

export default OrdenCompra;
