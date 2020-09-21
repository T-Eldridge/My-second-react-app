import React from 'react';

function FirstComponent(props) {
    return(
    <>
    <h1>Do you know what I am saying? from Butters bottom bitch</h1>
    <ul>
       {props.items.map((item, index) => {
           return <li key={index}>{props.items[index]}</li>
       })} 
    </ul>
    </>
    )
}

export default FirstComponent