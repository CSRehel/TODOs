import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';

function CreateTodoButton(props) {
    const {
        setOpenModal,
        openModal,
    } = React.useContext(TodoContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
    }

    return ( 
        <button 
            className='CreateTodoButton'
            onClick={ onClickButton }
        >+</button>
    );
}

export { CreateTodoButton };