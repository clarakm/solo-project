import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './components/Events.jsx';
import EventCard from './components/EventCard.jsx';
import './stylesheets/styles.css';

class App extends Component {
    render() {
      return (
        <div className="home">
          <main>
             {/* <Switch>
               <Route
                exact
                path='/'
                component={Events}
               />
               <Route
                exact
                path='/create'
                component={CreateEvent}
               />
             </Switch> */}
             <Events />
            
          </main>
        </div>
      );
    }
  
  }
  
  export default App;