import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
      
      render() {
        const { eventList } = this.state;
        console.log('test eventlist', eventList)
        const potluck = eventList.map((event, i) => {
            return (
                <EventCard
                    key={i}
                    info={event}
                />
            )
        })
        
        return (
            <div className="container">
                <Link to={`/create`}>
                    <button type="button" className="addButton">
                        Create Event
                    </button>
                </Link>
                {potluck}
            </div>
        )
        
      }
}

export default Events;

