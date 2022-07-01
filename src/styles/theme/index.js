import { extendTheme } from "@chakra-ui/react";

// GLobal styles 
import  { styles } from "./styles";

//colors
import { colors } from "./color";

// component button
import {ButtonStyles as Button} from "./components/buttonStyle.jsx";

const overrides = {
  styles,
  colors,
  components: {
    Button,
  },
}
export const theme = extendTheme( overrides )