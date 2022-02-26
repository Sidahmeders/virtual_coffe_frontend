import Layout from './components/Layout/Layout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { ContextConsumer } from './context'

import AuthPage from './pages/auth'
import HomePage from './pages/home'
// import Cliques from './pages/home'

function App() {
    // const { randomFunction } = useContext(ContextConsumer)
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={AuthPage} />
                    <Layout>
                        <Route exact path="/home" component={HomePage} />
                        {/* <Route path="/cliques" component={Cliques} /> */}
                    </Layout>
                </Switch>
            </Router>
        </>
    )
}

export default App
