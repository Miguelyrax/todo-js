import {Todo} from '../classes';
import {todoList} from '../index';

//Referencias en el hmtl
const divTodoList = document.querySelector('.todo-list')
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro')
export const crearTodoHtml = (todo) =>{

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
        <div class="view">
        <input class="toggle" type="checkbox" ${  (todo.completado) ? 'checked' : '' }>
            <label>${todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div.firstElementChild;
}

txtInput.addEventListener('keyup', () =>{
    // console.log(event);
    if(event.keyCode === 13 && txtInput.value.length > 0){
        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo (nuevoTodo);
        crearTodoHtml(nuevoTodo);
        txtInput.value='';
    }
});

divTodoList.addEventListener('click', ()  =>{
    
    const nombreElemento = event.target.localName; //input,label,button
    const todoElemento = event.target.parentElement.parentElement; //referencia al elemento html
    const todoId = todoElemento.getAttribute('data-id')
    
    if(nombreElemento.includes('input')){  //Si el nombre del elemento incluye algo llamado input, hizo click en el check


        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); //classList, referencia a todas las clases.....cambiar una clases con toggle, si hay una clase n el parentesis la quita y si no existe la pone

    }else if(nombreElemento.includes('button')){
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento); //Remover elemento html, de lo contrario solo se eliminaria del array;
    } 
    console.log(todoList);
})


btnBorrar.addEventListener('click', () =>{

    todoList.eliminarCompletados();

    for(let i = divTodoList.children.length-1; i>=0;i--){


        const elemento = divTodoList.children[i];
        if(elemento.classList.contains('completed')){//contains comprueba si un elemento tiene una clase
            divTodoList.removeChild(elemento);
        }  

    }

});

    ulFiltros.addEventListener('click', (event) =>{
        
        const filtro =event.target.text;
        if(!filtro) {return;}
        anchorFiltros.forEach(elem => elem.classList.remove('selected'));
        event.target.classList.add('selected');
        for(const elemento of divTodoList.children){
            elemento.classList.remove('hidden');
            const completado = elemento.classList.contains('completed');

            switch(filtro){
                case 'Pendientes':
                    if(completado)
                    {
                        elemento.classList.add('hidden');
                        break;
                    }
                    break;
                case 'Completados':
                    if(!completado)
                    {
                            elemento.classList.add('hidden');
                            break;
                    }  
                    break;  
                    
            }
        }
    });


