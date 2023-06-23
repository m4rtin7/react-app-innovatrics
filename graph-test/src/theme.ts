import { createTheme } from '@mui/material'
import type {} from '@mui/x-data-grid/themeAugmentation'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00e676',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#393434',
      paper: '#1e1c1c',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: 'rgba(255,255,255,0.6)',
      disabled: 'rgba(255,255,255,0.38)',
    },
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1c1c',
          borderRadius: 0,
          '& .MuiSvgIcon-root': {
            color: '#00e676',
          },
        },
        menuIconButton: {
          color: '#FFF',
        },
        iconButtonContainer: {
          button: {
            color: '#FFF',
          },
        },
        menuIcon: {
          color: '#FFF',
        },
      },
    },
  },
})
