import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import EventCard from './EventCard.jsx';

    const Events = props => {
    //   render() {
        // const { eventList } = 
        const potluck = props.props.eventList.map((event, i) => {
            return (
                <EventCard
                    index={i}
                    info={event}
                    deleteEvent={props.deleteEvent}
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
                <div className="eventsContainer">
                {potluck}
                </div>
            </div>
        )
        
      
}

export default Events;

