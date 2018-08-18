import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "./src/layouts";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#311b92"
    },
    secondary: {
      main: "#ff3d00"
    }
  }
});

export const wrapRootElement = ({ element }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Layout>{element}</Layout>
    </MuiThemeProvider>
  );
};
