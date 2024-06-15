import { extendTheme } from "native-base";

const { color } = require("./colors");

const theme = extendTheme({
    components: {
        Button: {
            // Can simply pass default props to change default behaviour of components.
            baseStyle: {
                rounded: 'md',
                height: 50,
            },
            defaultProps:{
                _pressed: {
                    backgroundColor: 'primary.200',
                    opacity: 0.9
                }
            }
            
        },
    },
    colors: {
        primary: {
            600: color.primary,
            500: color.primaryShades[500],
            400: color.primaryShades[400],
            300: color.primaryShades[300],
            200: color.primaryShades[200],
            100: color.primaryShades[100],
        },
        secondary: {
            600: color.secondary,
            500: color.secondaryShades[500],
            400: color.secondaryShades[400],
            300: color.secondaryShades[300],
            200: color.secondaryShades[200],
            100: color.secondaryShades[100],
        },
        // Redefinig only one shade, rest of the color will remain same.
        amber: {
            400: '#d97706',
        },

    },
    InputAbsolut:{
        width:"100%",
        position: "absolute",
    }

});
export default theme