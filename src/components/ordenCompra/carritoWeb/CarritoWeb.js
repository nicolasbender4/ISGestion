import { Button, Container, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "../../../theme/useStyles";

const CarritoWeb = () => {
  const classes = useStyles();

  return (
    <>
      <Paper>
        <Typography variant="h4" align="center">
          Carrito Web
        </Typography>
        <Button fullWidth variant="outlined" color="primary">
          Enviar Predido
        </Button>
      </Paper>
    </>
  );
};

export default CarritoWeb;
