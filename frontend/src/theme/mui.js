import { createTheme } from "@mui/material/styles";

const mui = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontFamily: "Poppins, ProximaNova, Helvetica, Arial, serif",
  },
});

export default mui;
