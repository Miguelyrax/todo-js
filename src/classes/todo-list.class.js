import { Todo } from "./todo.class";


export class TodoList{
    constructor(){
        // this.todos =[];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){


        this.todos = this.todos.filter(todo => todo.id != id) //va a barrer cada todo.
        //Creamos un arreglo nuevo, con todos los todos , menos con el que mandamos en la condicion.(nuevo arrelgo excluyendo el id que mandamos)
        this.guardarLocalStorage();
    }

    marcarCompletado(id){
        for(const todo of this.todos){
            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado)
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify( this.todos)); //Convertir lista de todos, en un json perfecto

    }
    cargarLocalStorage(){
        //if(localStorage.getItem('todo')){
        //    this.todos =JSON.parse( localStorage.getItem('todo'));
        //}else{
        //    this.todos = [];
        //}
       this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse( localStorage.getItem('todo'))
                    : [];
        this.todos = this.todos.map(Todo.fromJson );  //Metodo de los arreglos, map permite barrer cada uno de los elementos del arreglo, y retornar un arreglo mutado            
    }


}

