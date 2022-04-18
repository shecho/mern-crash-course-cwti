import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    body: {
      bg: mode("#E5E5E5", "#6D6D6D")(props),
    },
  }),
};

export default styles;
