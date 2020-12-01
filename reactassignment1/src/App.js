import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView'
import About from './views/About'
import Contact from './views/Contact'
import PageNotFound from './views/PageNotFound'
import Menu from './components/Menu'

const App = () => {
    return (
        <>
            <Menu />
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route component={PageNotFound} />
            </Switch>
        </>
    )
}

export default App;
