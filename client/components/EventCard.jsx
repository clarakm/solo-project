import React, { Component } from 'react';


const EventCard = props => {
        return (
            <div className="eventCard">
                <ul className="eventDetailsList">
                    <li className="eventDetail">Event: {props.eventList}</li>
                    <li className="eventDetail">Date/Time: {props.eventList}</li>
                    <li className="eventDetail">Location: {props.eventList}</li>
                </ul>
            </div>
        )
}

export default EventCard;