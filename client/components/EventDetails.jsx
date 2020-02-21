import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CoordinateMeals from './CoordinateMeals.jsx';

class EventDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            guest: '',
            dish: '',
            specificDish: '',
            restrictions: '',
            detailsArray: [],
        }
        this.guestChange = this.guestChange.bind(this);
        this.chooseDish = this.chooseDish.bind(this);
        this.dishChange = this.dishChange.bind(this);
        this.restrictionsChange = this.restrictionsChange.bind(this);
    }

    componentDidMount() {
        this.getDetails();
     }

    
     getDetails = () => {
        console.log('in get details')
        fetch(`/events/details`)
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

    restrictionsChange(e) {
        console.log('restrictionsChange');
        const { value } = e.target;
        this.setState(prevState => ({
            restrictions: value
        }))
    }

    async saveDish() {
        console.log('insavedish');
        const body = {
            guest: this.state.guest,
            dish: this.state.dish,
            specificDish: this.state.specificDish,
            restrictions: this.state.restrictions
        }
        console.log(body)
        const fetchRes = await fetch(`/events/details`, {
            method: 'POST',
            headers: {
              "Content-Type": "Application/JSON"
            },
            body: JSON.stringify(body)
        })
        console.log('in post det')
        const data = await fetchRes.json();
        console.log('data HERE', data)
        // this.getDetails();
        this.setState(prevState => ({
            guest: '',
            dish: '',
            specificDish: '',
            restrictions: '',
            detailsArray: data
        }))
    }

    render() {
        const { guest, dish, specificDish, restrictions } = this.state;
        
        return (
            <section className="detailsContainer">
                <div className="mealItems">
                    <header className="pageHeader">
                        <h2>Potluck Details</h2>
                    </header>
                    <article className="foods">
                        <CoordinateMeals props={this.state}/>
                    </article>
                </div>
                <div className="forms">
                    <header className="pageHeader">
                        <h2 id="bring">What Will You Bring?</h2>
                    </header>
                    <article className="submit">
                        <div className="input">
                            <label htmlFor="guest">Guest:&nbsp;&nbsp; </label>
                            <input name="guest" value={guest} onChange={this.guestChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="dish">Pick your dish:&nbsp;&nbsp;&nbsp;
                            <select value={dish} onChange={this.chooseDish}>
                                <option value="choose">Choose</option>
                                <option value="appetizer">Appetizer</option>
                                <option value="entree">Entree</option>
                                <option value="dessert">Dessert</option>
                            </select>
                            </label>
                        </div>
                        <div className="input">
                            <label htmlFor="specificDish">Dish:&nbsp;&nbsp; </label>
                            <input name="specificDish" value={specificDish} onChange={this.dishChange} />
                        </div>
                        <div className="input">
                            <label htmlFor="restrictions">Dietary Restrictions:&nbsp;&nbsp; </label>
                            <input name="restrictions" value={restrictions} onChange={this.restrictionsChange} />
                        </div>
                        <div className="saveDishButton">
                            <button type="button" className="save" onClick={() => {this.saveDish()}}>Save</button>
                            <Link to={`/`}>
                                <button type="button" className="back">Back To Events</button>
                            </Link>
                        </div>
                    </article>
                </div>
            </section>


        )
    }
}

export default withRouter(EventDetails);