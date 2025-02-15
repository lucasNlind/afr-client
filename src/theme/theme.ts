import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
    shadows: Array(25).fill('none') as any,
    components: {
        MuiPaper: {
                styleOverrides: {
                root: {
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 25px 0px',
                },
            },
        },
    },
    palette: {
        mode: 'light',
        success: {
            light: '#d3f3df',
            main: '#22c55e',
            dark: '#072713'
        },
        error: {
            light: '#FE5B4C',
            main: '#ff2100',
            dark: '#CC1A00',
        },
        warning: {
            light: '#ffb74d',
            main: '#ffa726',
            dark: '#f57c00'
        },
        primary: {
            light: '#ffd180',  // Lighter orange
            main: '#FF8800',   // Original orange
            dark: '#c17600'    // Darker orange
        },
        grey: {
            100: '#e8e8e8',
            200: '#d1d1d1',
            300: '#bababa',
            400: '#a3a3a3',
            500: '#8c8c8c',
            600: '#707070',
            700: '#545454',
            800: '#383838',
            900: '#1c1c1c',
        }
    },
    typography: {
        fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
        h1: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '2.5rem', // 40px
            fontWeight: 500,
        },
        h2: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '2rem', // 32px
            fontWeight: 500,
        },
        h3: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1.5rem', // 24px
            fontWeight: 500,
        },
        h4: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1.25rem', // 20px
            fontWeight: 500,
        },
        body1: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1rem', // 16px
        },
        body2: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1rem', // 14px
        },
        caption: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1rem', // 16px
        },
        subtitle1: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '0.75rem', // 12px
        },
    }
});


export const darkTheme = createTheme({
    shadows: Array(25).fill('none') as any,
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: 'rgba(39, 43, 47, 0.4) 0px 3px 25px 0px',
                },
            },
        },
    },
    palette: {
        mode: 'dark',
        background: {
            default: '#1e1e1e',
            paper: '#272B2F',
        },
        success: {
            light: '#d3f3df',
            main: '#22c55e',
            dark: '#072713'
        },
        error: {
            light: '#FE5B4C',
            main: '#ff2100',
            dark: '#CC1A00',
        },
        warning: {
            light: '#ffb74d',
            main: '#ffa726',
            dark: '#f57c00'
        },
        primary: {
            light: '#ffd180',  // Lighter orange
            main: '#FF8800',   // Original orange
            dark: '#c17600'    // Darker orange
        },
        grey: {
            100: '#e8e8e8',
            200: '#d1d1d1',
            300: '#bababa',
            400: '#a3a3a3',
            500: '#8c8c8c',
            600: '#707070',
            700: '#545454',
            800: '#383838',
            900: '#1c1c1c',
        }
    },
    typography: {
        fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
        h1: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '2.5rem', // 40px
            fontWeight: 500,
        },
        h2: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '2rem', // 32px
            fontWeight: 500,
        },
        h3: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1.5rem', // 24px
            fontWeight: 500,
        },
        h4: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1.25rem', // 20px
            fontWeight: 500,
        },
        body1: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1rem', // 16px
        },
        body2: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '0.875rem', // 14px
        },
        caption: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '1rem', // 16px
        },
        subtitle1: {
            fontFamily: ['Zen Kaku Gothic Antique', 'serif'].join(','),
            fontSize: '0.75rem', // 12px
        },
    }
});

