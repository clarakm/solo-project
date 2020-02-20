import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';



const EventCard = props => {
    const { name, date, location } = props.info;
        return (
            <div className="eventCardContainer">
            <Link to={`/${props.index}`}>
            <div className="eventCard">
                <ul className="eventDetailsList">
                    <li id="eventName" className="eventDetail"><b>{name}</b></li>
                    <Countdown className="countdown" date={date} />
                    <li className="eventDetail">Date: {date}</li>
                    <li className="eventDetail">Location: {location}</li>
                </ul> 
            </div>
            </Link>
            <button onClick={() => {props.deleteEvent(props.info)}}>Delete Event</button>
            </div>
        )
};

export default EventCard;