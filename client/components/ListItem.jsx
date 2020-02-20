import React, { Component } from 'react'

const ListItem = props => {
    console.log(props.items)
    return (
        <div className="items">
            {props.items.guest} : {props.items.specificDish}
        </div>
    )
}

export default ListItem;