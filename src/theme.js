import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#2ebaee"
        },
        secondary: {
            main: "#8b92c2"
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: "18px",
                    minWidth: "200px",
                    padding: "5px",
                    height: "48px",
                    color: "#f6f7fb",
                    "&::before": {
                        borderBottom: "2px solid #868fbf!important"
                    },
                },
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: "0",
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    backgroundColor: "#300075",
                    color: "white",
                    "&:hover": {
                        backgroundColor: "#46529d"
                    },
                    "&.Mui-selected": {
                        backgroundColor: "#2ebaee",
                        "&:hover": {
                            backgroundColor: "#2ebaee",
                        }
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "16px",
                    lineHeight: "22px",
                    padding: "13px 20px",
                    color: "#f6f7fb",
                }
            }
        }
    }
});

export default theme;