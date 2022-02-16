/* import React from "react";

const DetectDevice = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 620;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  if (width < breakpoint) {
    return "Mobile";
  } else {
    return "Desktop";
  }
};
export default DetectDevice; */



import { ReactNode } from "react";
import * as rdd from "react-device-detect";

interface DeviceProps {
  children: (props: typeof rdd) => ReactNode;
}
export default function Device(props: DeviceProps) {
  return <div className="device-layout-component">{props.children(rdd)}</div>;
}
