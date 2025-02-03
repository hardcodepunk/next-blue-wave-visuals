import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    primary: {
      main: '#FFEACF',
    },
  },
  typography: {
    fontFamily: 'Georgia, serif',
    h1: {
      fontFamily: 'Nighty, serif',
      fontSize: '100px',
      '@media (max-width: 1200px)': {
        fontSize: '80px',
      },
    },
    h2: {
      fontFamily: 'Nighty, sans-serif',
      fontSize: '62px',
    },
    h3: {
      fontFamily: 'Georgia, sans-serif',
      fontSize: '40px',
    },
    h4: {
      fontFamily: 'Nighty, sans-serif',
      fontSize: '22px',
      '@media (max-width: 1200px)': {
        fontSize: '16px',
      },
    },
    h5: {
      fontSize: '16px',
      lineHeight: '1.5em',
      '@media (max-width: 1200px)': {
        fontSize: '14px',
      },
    },
  },
})

export default theme
