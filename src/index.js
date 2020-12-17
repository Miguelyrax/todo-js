// import { TodoList } from './classes/todo-list.class';
// import { Todo } from './classes/todo.class';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); //Lo mismo de arriba, pero como solo tenemos un solo argumento, lo demas se obvia
console.log(todoList.todos);
// const tarea = new Todo('Aprender javascript');
//
//todoList.nuevoTodo(tarea);
//console.log(todoList);

//crearTodoHtml(tarea);


//local storage y sessions storage
//localStorage.setItem('mi-key','abc123');
//sessionStorage.setItem('mi-key','abc123');

//setTimeout(()=>{
//    localStorage.removeItem('mi-key');
//}, 1500);

