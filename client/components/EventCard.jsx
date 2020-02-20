import React, { Component } from 'react';
import Countdown from 'react-countdown-now';
import { Link } from 'react-router-dom';


const EventCard = ({ info, id }) => {
    const { name, date, location } = info;
        return (
            <div className="eventCardContainer">
            <Link to={`/${name}`}>
            <div className="eventCard">
                <ul className="eventDetailsList">
                    <li id="eventName" className="eventDetail"><b>{name}</b></li>
                    <Countdown className="countdown" date={date} />
                    <li className="eventDetail">Date: {date}</li>
                    <li className="eventDetail">Location: {location}</li>
                </ul> 
            </div>
            </Link>
            <button>Delete Event</button>
            </div>
        )
};

export default EventCard;