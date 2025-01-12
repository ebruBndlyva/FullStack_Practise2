import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './Redux/store.js'
import { Provider } from 'react-redux'
import FavoriteProvider from './context/FavoriteContext.jsx'

createRoot(document.getElementById('root')).render(
<FavoriteProvider FavoriteProvider>
<Provider store={store}>
    <App />
  </Provider>,
</FavoriteProvider>
)
