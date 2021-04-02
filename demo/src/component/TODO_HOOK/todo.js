import './todo.css';
import TodoForm from './todoInput';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';


function Todo({todo, index ,onImportantTodo,onEditTodo, onRemoveTodo}){
    return <div className="todo" 
    // style={{textDecoration: todo.isImportant? "line-through" : ""}}
    style ={{color:todo.isImportant? "blue": ""}}
    >
        {todo.text}
        <div>
        <button class="button2" onClick={() => onEditTodo(index)}>Edit</button>
        <button  class="button2" onClick={() => onRemoveTodo(index)}>Remove</button>
        <button class="button2" onClick={() => onImportantTodo(index)}>{todo.isImportant?"Important":"Not Important"}</button>
        </div>
    </div>
}

function TodoApp(){

  const ref = useRef(null);

    const [todos, setTodos] = React.useState([
        { text: "Learn about React" , isImportant: false},
        { text: "Meet friend for lunch" ,isImportant: true},
        { text: "Build really cool todo app", isImportant: false },
        { text: "Implement all functional requirement", isImportant: false },
        { text: "Sync in local storage.", isImportant: false }
      ]);
    
      const addTodo = text =>{
          console.log({text});
          const newTodo = [...todos , {text: text,isImportant: false}];
          setTodos(newTodo);
      }

      const onImportantTodo = index =>{
          console.log(index);
          const newTodo =[...todos];
          newTodo[index].isImportant = !newTodo[index].isImportant;
          setTodos(newTodo); 
      }

      const onEditTodo = index =>{
        const newTodo =[...todos];
        const slicedTodo = newTodo.splice(index,1);
        setTodos(newTodo); 
       // debugger
        ref.current.editInput(slicedTodo);
      }

      const onRemoveTodo = index =>{
          let newTodo = [...todos];
          console.log(newTodo.splice(index,1))
          setTodos(newTodo);
      }


    return(<div className="app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          onImportantTodo={onImportantTodo}
          onRemoveTodo ={onRemoveTodo}
          onEditTodo ={onEditTodo}
        />
      ))}

      <TodoForm addTodo={addTodo} ref={ref}/>
    </div>
  </div>)
}
export default TodoApp;