export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    fontWeight: "bold",
    color: "white",
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    xl: {
      width: "70px",
      padding: "10px",
    },
    sm: {
      width: "100px",
      padding: "12px",
    }
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: () => ({
      bg: "colors.primary",
      color: "white",
      borderRadius: "10px",
      _hover: {
        bg: "#FC415A",
        boxShadow: "md",
      },
    }),
    secondary: () => ({
      bg: "colors.secondary",
      borderRadius: "10px",
      _hover: {
        bg: "colors.secondaryLight",
        boxShadow: "md",
      },
    }),
    three: () => ({
      bg: "colors.blueDark",
      borderRadius: "10px",
      _hover: {
        bg: "colors.blueDarkLight",
        boxShadow: "md",
      },
    }),
    four: () => ({
      border: "1px",
      borderColor: "colors.primary",
      _hover: {
        bg: "colors.primaryLight",
        boxShadow: "md",
      },
    }),
    five: () => ({
      border: "1px",
      borderColor: "white",
      _hover: {
        bg: "rgba(220, 220, 220,0.3)",
        boxShadow: "md",
      },
    })
  },
  defaultProps: {},
}