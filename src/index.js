import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
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

ReactDOM.render(
    <StrictMode>
        <ContextProvider>
            <GlobalStyle />
            <App />
        </ContextProvider>
    </StrictMode>,
    document.getElementById('root')
)

serviceWorker.register()
