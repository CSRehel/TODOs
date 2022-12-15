import React from "react";
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    // estado
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false); 

    // número de todos completados
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    
    // número total de todos 
    const totalTodos = todos.length;

    // array vacío donde se guardan los todos, según sea el caso
    let searchedTodos = [];

    // si no se ha escrito nada en el buscador, se muestran todos
    // los todos por defecto
    if (!searchValue.length >= 1) {
        searchedTodos= todos;
    }else{

        // si se escribe algo en el buscador, se convierte todo
        // a minúsculas y se filtran los todos que contengan
        // la palabra ingresada
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    // marca como completado un todo
    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    // elimina un todo
    const deleteTodo = (text) => {
        const deletedTodo = todos.filter(todo => todo.text !== text);
        const newTodos = [...deletedTodo];
        saveTodos(newTodos);
    }

    // agrega un nuevo todo
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text: text
        });
        saveTodos(newTodos);
    }

    // elimina un todo
    const cancelTodo = (text) => {
        const deletedTodo = todos.filter(todo => todo.text !== text);
        const newTodos = [...deletedTodo];
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }