import React from "react";
import './TodoIcon.css';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
// import { AiOutlinePlusCircle } from 'react-icons/ai';

const iconTypes = {
    'check': color => ( 
        <AiOutlineCheckCircle className="Icon-svg Icon-svg--check" fill={color} />
    ),
    'delete': color => (
        <AiOutlineCloseCircle className="Icon-svg Icon-svg--delete" fill={color}/>
    )
}

function TodoIcon({type, color = 'gray', onClick}) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon }