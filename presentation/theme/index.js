import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#1F2022", // almost black w/ blueish tint
  tertiary: "#344871", // bright red
  quaternary: "#CECECE", // pale gray
};

const theme = createTheme(
  colors,
  {
    primary: "Montserrat",
    secondary: "Helvetica",
  },
  {
    progress: {
      pacmanTop: {
        background: colors.quaternary,
      },
      pacmanBottom: {
        background: colors.quaternary,
      },
      point: {
        borderColor: colors.quaternary,
      },
    },
    components: {
      heading: {
        h1: {
          fontSize: "4rem",
          textTransform: "uppercase",
          marginBottom: "0.5em",
        },
        h2: {
          fontSize: "3.5rem",
          textTransform: "uppercase",
          marginBottom: "0.5em",
        },
        h3: {
          fontSize: "3rem",
          textTransform: "uppercase",
          marginBottom: "0.5em",
        },
        h4: {
          fontSize: "2.5rem",
          textTransform: "uppercase",
          marginBottom: "0.5em",
        },
        h5: {
          fontSize: "2rem",
          textTransform: "uppercase",
          marginBottom: "0.5em",
        },
        h6: {
          fontSize: "1.5rem",
          textTransform: "uppercase",
        },
      },
      p: {
        marginBottom: "0.5em",
      },
      codePane: {
        fontSize: "1.6rem",
      },
    },
  },
);

export default theme;
