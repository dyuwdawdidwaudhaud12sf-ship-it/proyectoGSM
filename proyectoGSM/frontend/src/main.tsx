import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles/'
import App from './App.tsx'
import tema from './Tema.ts'
import { Provider } from 'react-redux'
import { store } from './Store/index.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <Provider store={store}>
      <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
