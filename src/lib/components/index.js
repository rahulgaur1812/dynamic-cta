import React from 'react';
import './Cta.css';

export const Cta = (props) => {
    return (
        <button className={`btn btn--${props.kind} CTA`}
            data-id={props.id}
            type={props.type}
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            onClick={props.handleClick}>
            {props.label}
        </button>
    );
}