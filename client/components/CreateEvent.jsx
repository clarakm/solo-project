import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CreateEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            location: '',
        }
        this.nameOnChange = this.nameOnChange.bind(this);
        this.dateOnChange = this.dateOnChange.bind(this);
        this.locationOnChange = this.locationOnChange.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
    }

    nameOnChange(e) {
        const { value } = e.target;
        this.setState(prevState => ({
            name: value
        }));
    }

    dateOnChange(e) {
        const { value } = e.target;
        this.setState(prevState => ({
            date: value
        }));
    }

    locationOnChange(e) {
        const { value } = e.target;
        this.setState(prevState => ({
            location: value
        }));
    }

    async saveEvent() {
        console.log('in save event')
        const body = {
            name: this.state.name,
            date: this.state.date,
            location: this.state.location
        }
        const fetchRes = await fetch('/events/create', {
            method: 'POST',
            headers: {
              "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(body)
        })
        console.log('in post')
        const data = await fetchRes.json();
        console.log('data', data)
        this.props.addEvent(data);
    }


    render() {
        const { name, date, location } = this.state;
    return (
        <section className="formContainer">
           <header className="pageHeader">
               <h1>Create Event</h1>
           </header>
           <article className="infoContainer">
            <h3>Event details below:</h3>
            <div className="fields">
                <label htmlFor="name">Event Name: </label>
                <input name="name" value={name} onChange={this.nameOnChange} />
            </div>
            <div className="fields">
                <label htmlFor="date">Date: </label>
                <input name="date" value={date} onChange={this.dateOnChange} />
            </div>
            <div className="fields">
                <label htmlFor="location">Location: </label>
                <input name="location" value={location} onChange={this.locationOnChange} />
            </div>
            <div className="saveButton">
                <button type="button" className="save" onClick={this.saveEvent}>Save Event</button>
                <Link to={`/`}>
                <button type="button" className="back">Back To Events</button>
                </Link>
            </div>
           </article>
        </section>
    )
  }
}

export default withRouter(CreateEvent);