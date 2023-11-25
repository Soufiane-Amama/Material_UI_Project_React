const { blue, grey, purple } = require("@mui/material/colors");


const getTheme = (mode) => ({
    palette: {
        // @ts-ignore
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              soufiane: {
                main: blue[500],
                dark: blue[700],
              },
              favColor: {
                main: grey[300]
              },
            }
          : {
              // palette values for dark mode
              soufiane: {
                main: purple[500],
                dark: purple[700],
              },
              favColor: {
                main: grey[900]
              },
            }),
      },
  });
  
export default getTheme;