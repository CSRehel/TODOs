import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);

        // el estado comienza siendo un string vació ''
        // al momento de escribir algo en el buscador
        // el estado es cambiado poor el event.target.value
        setSearchValue(event.target.value);
    }

    return (
        <input 
            className='TodoSearch' 
            placeholder='buscar...'
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };