import { Todo } from "../classes";

import {todoList} from '../index'

const divTodoList = document.querySelector('.todo-list')
const txtInput =document.querySelector('.new-todo');
const btnBorraTodo = document.querySelector('.clear-completed')



export const crearTodoHtml  = (todo) =>{

const html = `

                    <li class="${(todo.completado) ? 'completed' : ''}" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''} >
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
					</li>


`
const div = document.createElement('div');
div.innerHTML = html;

divTodoList.append(div.firstElementChild)


return div.firstElementChild;
}

// event


txtInput.addEventListener('keyup', (e)=>{

 

    if(e.keyCode === 13 && txtInput.value.length > 0) {
        const nuevoTodo = new Todo(txtInput.value)
        todoList.nuevoTodo(nuevoTodo)
        crearTodoHtml(nuevoTodo)
        
       
        txtInput.value = '';
    }
})


divTodoList.addEventListener('click', (e)=> {

    
   const nombreElemento = e.target.localName;
   const todoElemento = e.target.parentElement.parentElement
    const todoId = todoElemento.getAttribute('data-id')

   if(nombreElemento.includes('input')){
       todoList.marcarCompletadoTodo(todoId)
       todoElemento.classList.toggle('completed')
   }

   
   else if(nombreElemento.includes('button')){
    todoList.eliminarTodo(todoId)
       divTodoList.removeChild(todoElemento)
}
})

btnBorraTodo.addEventListener('click', e => {

    todoList.eliminarCompletados()


    for(let i = divTodoList.children.length-1; i >= 0; i--){

        const elemento = divTodoList.children[i]

       if (elemento.classList.contains('completed')){
        divTodoList.removeChild(elemento)
       } 

    }


})