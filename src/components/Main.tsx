import React from "react";
import { StyleProvider, ThemePicker, Grid } from "vcc-ui";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";
import dynamic from "next/dynamic";

export const Main = () => {
  const getData = require("../../public/api/cars.json");
  const Device = dynamic(() => import("./DetectDevice"), { ssr: false });
  /* export default Device; */

  return (
    <StyleProvider>
      <ThemePicker variant="light">
        <Grid>
          <Device>
            {({ isMobile }) => {
              if (isMobile) return <MobileView data={getData} />;
              return <DesktopView data={getData} />;
            }}
          </Device>
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
