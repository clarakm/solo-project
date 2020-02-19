import React, { Component } from 'react';
import EventCard from './EventCard.jsx';

class Events extends Component {
    constructor() {
        super();
        this.state = {
          eventList: [],
        }
      }

      componentDidMount() {
        this.getEvents();
      }

      getEvents = () => {
        console.log('in get events')
        fetch('/events')
        .then(res => {
            console.log('res: ', res)
            return res.json();
        })
        .then(list => {
            console.log('list: ', list)
            this.setState(prevState => ({
                eventList: prevState.eventList.push(list)
            }))
        })
      }
      
      render() {
        return (
            <div className="container">
                <EventCard eventList={this.state.eventList}/>
            </div>
        )
        
      }
}

export default Events;

