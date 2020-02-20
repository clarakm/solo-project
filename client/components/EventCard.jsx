import React, { Component } from 'react';


const EventCard = ({ info }) => {
    const { name, date, location } = info;
        return (
            <div className="eventCard">
                <ul className="eventDetailsList">
                    <li className="eventDetail">Event: {name}</li>
                    <li className="eventDetail">Date/Time: {date}</li>
                    <li className="eventDetail">Location: {location}</li>
                </ul>
            </div>
        )
};

export default EventCard;