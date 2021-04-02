import './todo.css';
import TodoForm from './todoInput';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';


function Todo({todo, index ,onCompleteTodo,onEditTodo, onRemoveTodo}){
    return <div className="todo" style={{textDecoration: todo.isCompleted? "line-through" : ""}}>
        {todo.text}
        <div>
        <button class="button2" onClick={() => onEditTodo(index)}>Edit</button>
        <button  class="button2" onClick={() => onRemoveTodo(index)}>Remove</button>
        <button class="button2" onClick={() => onCompleteTodo(index)}>{todo.isCompleted?"Complete":"DO"}</button>
        </div>
    </div>
}

// function TodoForm(props){
//     const [todo, setTodo] = React.useState("");

//     const handleSubmit = e => {
//         e.preventDefault();
//          if(!todo) return;
//         props.addTodo(todo);
//         setTodo("");
//     }

//     const handleChange = e=>{
//         setTodo(e.target.value)
//     }

//     return (<form onSubmit={handleSubmit} className="todo">
//         <input  type="text"
//         className="input"
//         value={todo} 
//         onChange={handleChange} ></input>
//     </form>)
// }


function TodoApp(){

  const ref = useRef(null);

    const [todos, setTodos] = React.useState([
        { text: "Learn about React" , isCompleted: false},
        { text: "Meet friend for lunch" ,isCompleted: true},
        { text: "Build really cool todo app", isCompleted: false },
        { text: "Implement all functional requirement", isCompleted: false },
        { text: "Sync in local storage.", isCompleted: false }
      ]);
    
      const addTodo = text =>{
          console.log({text});
          const newTodo = [...todos , {text: text,isCompleted: false}];
          setTodos(newTodo);
      }

      const onCompleteTodo = index =>{
          console.log(index);
          const newTodo =[...todos];
          newTodo[index].isCompleted = true;
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
          onCompleteTodo={onCompleteTodo}
          onRemoveTodo ={onRemoveTodo}
          onEditTodo ={onEditTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} ref={ref}/>
    </div>
  </div>)
}
export default TodoApp;