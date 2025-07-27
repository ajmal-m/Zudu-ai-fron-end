import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter  } from 'react-router-dom';
import { AuthProvider } from './context/authContext.tsx';
import { ThemeProvider } from './context/theme-context.tsx';

createRoot(document.getElementById('root')!).render(
    <AuthProvider>
    <BrowserRouter>
      <ThemeProvider>
          <App />
      </ThemeProvider>
    </BrowserRouter>
    </AuthProvider>,
)
