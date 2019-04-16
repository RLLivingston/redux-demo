import React from 'react';

export const Title = (props) => <aside>
    <div className="wrapper">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Price: {props.price}</p>
        <p>Format: {props.format}</p>
        <button onClick={props.addTitleToCart} className="addButton">Add To Cart</button>
    </div>
</aside>