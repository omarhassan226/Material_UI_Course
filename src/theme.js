import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50055",
    },
    third: {
      main: "#c50044"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
  // components: {
  //   MuiAutocomplete: {
  //     styleOverrides: {
  //       root: {
  //         "& .MuiOutlinedInput-root": {
  //           "& fieldset": {
  //             borderColor: "#d81b60",
  //           },
  //           "&:hover fieldset": {
  //             borderColor: "#ad1457",
  //           },
  //           "&.Mui-focused fieldset": {
  //             borderColor: "#880e4f",
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
});

export default theme;
