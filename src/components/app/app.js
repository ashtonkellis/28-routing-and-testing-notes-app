import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Dashboard from '../dashboard/dashboard';
import Landing from '../landing/landing';
import './app.scss';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
        <div>
            <header>
              <h1>Note App</h1>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </nav>
            </header>
            <Route 
              exact
              path="/"
              component={Landing}
            />
            <Route 
              exact
              path="/dashboard"
              component={Dashboard}
            />
          </div>  
        </BrowserRouter>
      </div>
    );
  }
}
