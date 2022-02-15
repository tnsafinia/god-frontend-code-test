import React, { useEffect, useState } from "react";
import { StyleProvider, ThemePicker, Button, Grid, Row } from "vcc-ui";
import Linking from "./Linking";
import Photo from "./Photo";

export const Main = () => {
  const getData = require("../../public/api/cars.json");
  const itemsPerPage = 4

  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Grid>
          
          <Photo data={getData} />
          
        </Grid>
      </ThemePicker>
    </StyleProvider>
  );
};

//in a real life scenario, axios can be use for fetching data
/* const [data, setData] = useState([]);
  const getData = () =>{
    axios.get("url")
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {
      alert(err)
    })
  }
    
  useEffect(() => getData(), []); */
