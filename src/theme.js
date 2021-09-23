import { createTheme } from "@mui/material/styles";

const theme = (mode) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: '#EC4899'
            }
        }
    })
}
export default theme