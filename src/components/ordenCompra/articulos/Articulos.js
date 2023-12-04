import React, { useEffect } from "react";
import useStyles from "../../../theme/useStyles";
import {
  CardMedia,
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import productos from "../../../temp/data.json";
import { Input, Pagination, TableBody } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
// import BuscarArticulos from "../buscarArticulos/BuscarArticulos";

const Articulos = () => {
  const classes = useStyles();

  const [cantidad, setCantidad] = useState(1);
  const [articulos, setArticulos] = useState([]);
  const [tablaArticulos, setTablaArticulos] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const [page, setPage]= useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChangeBusqueda = (e) => {
    console.log(e.target.value);
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaArticulos.filter((elemento) => {
      if (elemento.descripcion.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setArticulos(resultadosBusqueda);
  };

  useEffect(()=>{
    setArticulos(productos);
    setTablaArticulos(productos);
  },[])

  //   function ListarDatos (){
  //     const [dato, setDato] = useState();
  //     useEffect(() => {
  //         fetch("./datos/datos.json")
  //         .then(response => response.json())
  //         .then(datos => {
  //             setDato(datos)
  //         })
  //     })
  // }
  // const dat = ListarDatos();
  // console.log(dat);
  

  return (
    <>
      <Typography variant="h4" align="center" className={classes.text_title}>
        Listado de Artículos
      </Typography>

      {/* <BuscarArticulos /> */}
      <Paper component="form" sx={{p: "2px 4px", display: "flex", alignItems: "center", width: "100%",}} full >
        <InputBase className={classes.inputBase}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Buscar artículos..."
          value={busqueda}
          onChange={handleChangeBusqueda}
          onSubmit={(e)=> e.preventDefault()}
        />
        <Divider sx={{ height: 25, m: 0.5 }} orientation="vertical" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <Grid container spacing={2}>
        <Grid item className={classes.gridItem}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Imagen</TableCell>
                  <TableCell>Descripción</TableCell>
                  <TableCell align="center">Precio</TableCell>
                  <TableCell align="center">Stock</TableCell>
                  <TableCell align="center">Cantidad</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {articulos.map((articulo) => (
                  <TableRow key={articulo.id}>
                    <TableCell>
                      <CardMedia
                        className={classes.imgArticuloGrid}
                        image="../../images/Buzo.png"
                        title="Imagen de artículo"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography>{articulo.descripcion}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>${articulo.precio}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>{articulo.stock}</Typography>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <Input
                        className={classes.input}
                        type="number"
                        value={cantidad}
                        onChange={(e, val) => setCantidad(val)}
                      ></Input>
                      <IconButton
                        color="primary"
                        aria-label="add to shopping cart"
                      >
                        <AddShoppingCartIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Typography>Página: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChangePage} size="small" color="primary" className={classes.pagination} showFirstButton showLastButton/>
        {/* <Grid item lg={3} md={4} sm={6} xs={12}>
          <Paper variant="outlined" square className={classes.papperPadding}>
            <Typography variant="h6" className={classes.text_title}>
              SUBTOTAL ({})
            </Typography>
            <Typography className={classes.text_title}>$ 143,46</Typography>
            <Divider className={classes.gridmb} />
            <Button variant="container" color="primary" size="large">
              REALIZAR COMPRA
            </Button>
          </Paper>
        </Grid> */}
      </Grid>
    </>
  );
};

export default Articulos;
