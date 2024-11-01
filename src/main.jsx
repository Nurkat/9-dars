import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:1,
      refetchOnWindowFocus:false,
      staleTime:1000*60*5,
      cachTime:1000*60*10,
      // refetchInterval:1000
    }
  }
})


createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>

)
