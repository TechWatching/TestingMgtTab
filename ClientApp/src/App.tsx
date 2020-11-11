import React from 'react';
import logo from './logo.svg';
import './App.css';
import MgtTab from './components/mgttab/mgttab';
import MgtTabConfig from './components/mgttabconfig/mgttabconfig';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Auth from './components/auth/auth';


function App() {
    return (
        <Router>
            <Route exact path="/tab" component={MgtTab} />
            <Route exact path="/tabconfig" component={MgtTabConfig} />
            <Route exact path="/auth" component={Auth}/>
        </Router>
  );
}

export default App;
