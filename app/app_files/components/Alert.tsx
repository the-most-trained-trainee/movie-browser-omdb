import React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLButtonElement>(function Alert(props, ref) {
  /* @ts-ignore: Unreachable code error */
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default Alert;
