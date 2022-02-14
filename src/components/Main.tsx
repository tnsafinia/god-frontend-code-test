import React, { useEffect, useState } from "react";
import { StyleProvider, ThemePicker, Button } from "vcc-ui";
import Photo from "./Photo";

export const Main = () => {
  const getData = require("../../public/api/cars.json");



  return (
    <StyleProvider>
      <ThemePicker variant="light">
         <Photo data={getData}/> 
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