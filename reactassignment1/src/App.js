import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './views/HomeView'
import About from './views/About'
import Contact from './views/Contact'

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={HomeView} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>
        </>
    )
}

export default App;
