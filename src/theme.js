import { createMuiTheme } from '@material-ui/core/styles';

import { purple, blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: { main: '#17b978', dark: '#086972', light: '#a7ff83' },
        secondary: { main: '#4B5EA2', dark: '#3c4b81', light: '#697bb9' },
    },
    typography: {
        button: {
            textTransform: 'none',
        },
    },
});

export default theme;
