import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className="Person">
            <p>I'm {props.name} and I'm - {props.age} years old.</p>
            <input type="text" onChange={props.change} value={props.name} />
            <p>{props.children}</p>
            <button className="btn" onClick={props.click}>Delete</button>
        </div>
    );
};

export default Person;