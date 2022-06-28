import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorkerRegistration'
import { ContextProvider } from './context'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
 @font-face {
   font-family: 'Jost';
   src: url(/assets/fonts/Jost-VariableFont_wght.ttf);
 }

 @font-face {
   font-family: 'Montserrat';
   src: url(/assets/fonts/Montserrat-Regular.ttf);
 }

 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Montserrat, sans-serif;
    user-select: none;
  }
`

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ContextProvider>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
)

serviceWorker.register()
