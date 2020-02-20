import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import EventCard from './EventCard.jsx';

    const Events = props => {
    //   render() {
        const potluck = props.props.eventList.map((event, i) => {
            return (
                <Link to={`/${i}`}>
                <EventCard
                    key={i}
                    info={event}
                />
                </Link>
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

export default Events;

