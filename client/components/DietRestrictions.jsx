import React, { Component } from 'react';

const DietRestrictions = props => {
    console.log('in diet',props.items)
    return (
        <div className="items">
            {props.items.restrictions}
        </div>
    )
}

export default DietRestrictions;