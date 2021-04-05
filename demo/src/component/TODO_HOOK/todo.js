import './todo.css';
import TodoForm from './todoInput';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TodoSearch from './todoSearch';
const status_options =["Pending","progressing","Completed","Rejected","Postponed"];
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Todo({todo, index ,onImportantTodo,onEditTodo, onRemoveTodo, onStatusSelect}){
  // const defaultStatus = status_options[0];
    return <div className="todo" 
    // style={{textDecoration: todo.isImportant? "line-through" : ""}}
    style ={{color:todo.isImportant? "blue": ""}} >
        <div className="todo-items"> 
        <div>{todo.text}</div>
        <div>{weekday[todo.time.getDay()]}, {todo.time.getDate()}, {todo.time.getMonth()}, {todo.time.getFullYear()}</div></div>
        
        <div className="property">
        <Dropdown className="dropdown" options={status_options} onChange={(e) => onStatusSelect(e, index)} value={status_options[todo.status]} placeholder="Status" />
        <button class="button2" onClick={() => onEditTodo(index)}>Edit</button>
        <button  class="button2" onClick={() => onRemoveTodo(index)}>Remove</button>
        <button class="button2" onClick={() => onImportantTodo(index)}>{todo.isImportant?"Important":"Not Important"}</button>
        </div>
    </div>
}

const todoList =[
  { text: "Learn about React" , isImportant: false, time: new Date(), status: 0},
  { text: "Meet friend for lunch" ,isImportant: true, time: new Date() ,status: 1},
  { text: "Build really cool todo app", isImportant: false , time: new Date(),status: 4},
  { text: "Implement all functional requirement", isImportant: false , time: new Date(),status: 2},
  { text: "Sync in local storage.", isImportant: false , time: new Date(),status: 3}
];

function TodoApp(){

  const ref = useRef(null);

  const [searchNote , setSearchNote] = useState("");
  const [todos, setTodos] = React.useState(todoList);

  React.useEffect(() => {
    setTodos([...todoList]);
    console.log(todos);
  },[]);
    
      React.useEffect(() => {
        const results = todos.filter(todo =>
          todo.text.toLowerCase().includes(searchNote.toLowerCase())
        );
        setTodos(results);
      }, [searchNote]);

      React.useEffect(() => {
        window.localStorage.setItem('todo', JSON.stringify(todoList));
      }, [todos]);

    
      const addTodo = text =>{
          const newTodo = [...todos , {text: text,isImportant: false, time: new Date(),status: 0}];
          setTodos(newTodo);
          // console.log(newTodo);
          window.localStorage.setItem('todo', JSON.stringify(newTodo));
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
        window.localStorage.setItem('todo', JSON.stringify(todoList));
        ref.current.editInput(slicedTodo);
      }

      const onRemoveTodo = index =>{
          let newTodo = [...todos];
          console.log(newTodo.splice(index,1))
          setTodos(newTodo);
      }

      const onStatusSelect = (status ,index) =>{
        let newTodo = [...todos];
        newTodo[index].status = status_options.indexOf(status.value);
       setTodos(newTodo);
      }

      const searchTodo = searchString =>{
        console.log(searchString);
        setSearchNote(searchString);
      }

    return(<div className="app">
      <h1>Todo CRUD</h1>
      <TodoSearch searchTodo={searchTodo}/>
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          onImportantTodo={onImportantTodo}
          onRemoveTodo ={onRemoveTodo}
          onEditTodo ={onEditTodo}
          onStatusSelect = {onStatusSelect}
        />
      ))}

      <TodoForm addTodo={addTodo} ref={ref}/>
    </div>
  </div>)
}
export default TodoApp;