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
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const d = new Date(this.state.date);
        const dateStr = monthNames[d.getMonth()] + ' ' + (d.getDate()+1).toString() + ', '+ d.getFullYear().toString();
        console.log('ds',dateStr)
        const body = {
            name: this.state.name,
            date: dateStr,
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
           <article className="infoContainer">
           <header id="createHeader" className="pageHeader">
               <h2>Create Event</h2>
           </header>
            {/* <h3 className="detailsBelow">Submit&nbsp;&nbsp;details&nbsp;&nbsp;below:</h3> */}
            <div className="fields">
                <label htmlFor="name">Event Name:&nbsp;&nbsp; </label>
                <input name="name" value={name} onChange={this.nameOnChange} />
            </div>
            <div className="fields">
                <label htmlFor="date">Date:&nbsp;&nbsp; </label>
                <input type="date" name="date" value={date} onChange={this.dateOnChange} />
            </div>
            <div className="fields">
                <label htmlFor="location">Location:&nbsp;&nbsp; </label>
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