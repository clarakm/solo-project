import React, { Component } from 'react';
import ListItem from './ListItem.jsx';


const CoordinateMeals = props => {
     console.log('da', props.props.detailsArray)
    const appetizerList = props.props.detailsArray.map((app) => {
        if (app.dish == 'appetizer') {
          return ( 
           <ListItem 
           items={app}
           /> 
          )  
        }
    });
    const entreeList = props.props.detailsArray.map((app, i) => {
        if (app.dish == 'entree') {
            return ( 
            <ListItem 
            items={app}
            /> 
            )      
        }
    });
    const dessertList = props.props.detailsArray.map((app, i) => {
        if (app.dish == 'dessert') {
            return ( 
            <ListItem 
            items={app}
            /> 
            )    
        }
    });
    return (
        <div>
            <h3>Appetizers</h3>
            {appetizerList}
            <h3>Entrees</h3>
            {entreeList}
            <h3>Desserts</h3>
            {dessertList}
        </div>
    )
    
}

export default CoordinateMeals;