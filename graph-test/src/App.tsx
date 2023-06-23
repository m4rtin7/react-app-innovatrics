import { Provider } from 'urql'
import { client } from './qraphql/client'
import { CustomTable } from './CustomTable'
import { Container, ThemeProvider } from '@mui/material'
import { Header } from './Header'
import { theme } from './theme'

function App() {
  return (
    <Provider value={client}>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <CustomTable />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}

export default App
