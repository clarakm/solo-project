import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CoordinateMeals from './CoordinateMeals.jsx';

class EventDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guest: '',
            // appetizers: [],
            // entrees: [],
            // desserts: [],
            dish: '',
            specificDish: '',
            detailsArray: [],
        }
        this.guestChange = this.guestChange.bind(this);
        this.chooseDish = this.chooseDish.bind(this);
        this.dishChange = this.dishChange.bind(this);
    }

    componentDidMount() {
        // const id = this.props.match.params.id;
        this.getDetails();
     }

    
     getDetails = () => {
        const id = this.props.match.params.id;
        console.log('in get details')
        fetch(`/events/details/${id}`)
        .then(res => {
            console.log('res: ', res)
            return res.json();
        })
        .then(output => {
            this.setState(prevState => ({
                detailsArray: prevState.detailsArray.concat(output)
            }))
        })
      }

    guestChange(e) {
        console.log('guestchange')
        const { value } = e.target;
        this.setState(prevState => ({
            guest: value
        }));
    }

    chooseDish(e) {
        console.log('choosedish');
        const { value } = e.target;
        this.setState(prevState => ({
            dish: value
        }))
    }

    dishChange(e) {
        console.log('dishChange');
        const { value } = e.target;
        this.setState(prevState => ({
            specificDish: value
        }))
    }

    async saveDish() {
        const id = this.props.match.params.id;
        console.log('insavedish');
        const body = {
            guest: this.state.guest,
            dish: this.state.dish,
            specificDish: this.state.specificDish
        }
        console.log(body)
        const fetchRes = await fetch(`/events/details/${id}`, {
            method: 'POST',
            headers: {
              "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(body)
        })
        console.log('in post det')
        const data = await fetchRes.json();
        console.log('data', data)
        // this.getDetails();
        this.setState(prevState => ({
            guest: '',
            dish: '',
            specificDish: '',
            detailsArray: data
        }))
    }

    render() {
        const { guest, dish, specificDish } = this.state;
        // console.log(this.state.detailsArray)
        
        // const appetizerList = appetizers.map((app) => {
        //     return app;
        // })
        // const entreeList = entrees.map((ent) => {
        //     return ent;
        // })
        // console.log(entreeList)
        // const dessertList = desserts.map((des) => {
        //     return des;
        // })
        
        return (
            <section className="detailsContainer">
                <h1>Event Details</h1>
                <article className="foods">
                    <CoordinateMeals props={this.state}/>
                    {/* <h3>Appetizers</h3>
                        <div className="appetizers">
                            {appetizerList}
                        </div>
                    <h3>Entrees</h3>
                        <div className="entrees">
                            {entreeList}
                        </div>
                    <h3>Desserts</h3>
                        <div className="desserts">
                            {dessertList}
                        </div> */}
                </article>
                <h2>What Will You Bring?</h2>
                <article className="submit">
                    <div className="input">
                        <label htmlFor="guest">Guest: </label>
                        <input name="guest" value={guest} onChange={this.guestChange} />
                    </div>
                    <div className="input">
                        <label htmlFor="dish">Pick your dish:
                        <select value={dish} onChange={this.chooseDish}>
                            <option value="choose">Choose</option>
                            <option value="appetizer">Appetizer</option>
                            <option value="entree">Entree</option>
                            <option value="dessert">Dessert</option>
                        </select>
                        </label>
                    </div>
                    <div className="input">
                        <label htmlFor="specificDish">Dish: </label>
                        <input name="specificDish" value={specificDish} onChange={this.dishChange} />
                    </div>
                    <div className="saveDishButton">
                        <button type="button" className="saveDish" onClick={() => {this.saveDish()}}>Save</button>
                        <Link to={`/`}>
                            <button type="button" className="back">Back To Events</button>
                        </Link>
                    </div>
                </article>
            </section>


        )
    }
}

export default withRouter(EventDetails);