import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Events from './components/Events.jsx';
import CreateEvent from './components/CreateEvent.jsx';
// import EventCard from './components/EventCard.jsx';
import './stylesheets/styles.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
    }
    this.addEvent = this.addEvent.bind(this)
    // this.deleteEvent = this.deleteEvent.bind(this)
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    console.log('in get events')
    fetch('/events/')
    .then(res => {
        console.log('res: ', res)
        return res.json();
    })
    .then(list => {
        console.log('list: ', list)
        this.setState(prevState => ({
            eventList: prevState.eventList.concat(list)
        }))
    })
  }
  
  addEvent = (event) => {
    console.log('in add event')
    this.setState(prevState => ({
      eventList: prevState.eventList.concat(event)
    }))
  }

  deleteEvent = async (event) => {
    const body = {
      name: event.name
    }
    console.log('in delete')
    const fetchRes = await fetch('/events/', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(body)
    });
    const data = await fetchRes.json();
    this.setState({
      eventList: data
    })
  }

    render() {
      // const eventProps = {
      //   eventList: this.state.eventList
      // };
      return (
        <div className="home">
          <main>
             <Switch>
               <Route exact path="/"
                component={
                  () => <Events props={this.state} addEvent={this.addEvent} deleteEvent={this.deleteEvent}/>
                }
               />
               <Route exact path="/create"
                component={
                  () =>  <CreateEvent props={this.state} addEvent={this.addEvent} />
                }
               />
             </Switch>
          </main>
        </div>
      );
    }
  
  }
  
  export default App;