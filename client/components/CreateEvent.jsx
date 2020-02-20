import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CreateEvent extends Component {
// const CreateEvent = props => {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            locations: '',
        }
    }
    render() {
    return (
        <section className="formContainer">
           <header className="pageHeader">
               <h1>Create Event</h1>
           </header>
           <article className="infoContainer">
            <h3>Event details below:</h3>
            <div className="fields">
                <label htmlFor="name">Event Name: </label>
                <input name="name" value={name} onChange={nameOnChange} />
            </div>
            <div className="fields">
                <label htmlFor="date">Date: </label>
                <input name="date" value={date} onChange={dateOnChange} />
            </div>
            <div className="fields">
                <label htmlFor="location">Location: </label>
                <input name="location" value={location} onChange={locationOnChange} />
            </div>
            <div className="saveButton">
                <button type="button" className="save" onClick={saveEvent}>Save Event</button>
            </div>
           </article>
        </section>
    )
  }
}

export default withRouter(CreateEvent);