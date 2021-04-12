import './todo.css';
import TodoForm from './todoInput';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import 'react-dropdown/style.css';
import TodoSearch from './todoSearch';
import { IconContext } from "react-icons";
import {AiFillStar} from 'react-icons/ai';
import DropdownComponent from './dropdown';


const status_options =["Pending","progressing","Completed","Postponed","Rejected"];
const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
 

function Todo({todo, index ,onImportantTodo,onEditTodo, onRemoveTodo, onStatusSelect}){
    return <div className="todo" 
    // style={{textDecoration: todo.isImportant? "line-through" : ""}}
    style ={{color:todo.isImportant? "blue": ""}} >
       <IconContext.Provider value={{color:todo.isImportant? "blue": "", size:"1.5em" , className: "global-class-name" }}>
            <div  onClick={() => onImportantTodo(index)} ><AiFillStar/></div>
        </IconContext.Provider>
        <div className="todo-items"> 
        <div>{todo.text}</div>
        <div>{weekday[todo.time.getDay()]}, {todo.time.getDate()}, {todo.time.getMonth()}, {todo.time.getFullYear()}</div></div>
        
        <div className="property">
        {/* <Dropdown className="dropdown"  options={status_option_modified} onChange={(e) => onStatusSelect(e, index)} value={status_options[todo.status]} placeholder="Status" /> */}
        <DropdownComponent 
        className="dropdown"
        onStatusSelect ={onStatusSelect}
        index={index}
        todo={todo}
        />
        <button class="button2" onClick={() => onEditTodo(index)}>Edit</button>
        <button  class="button2" onClick={() => onRemoveTodo(index)}>Remove</button>
        {/* <button class="button2" onClick={() => onImportantTodo(index)}>{todo.isImportant?"Important":"Not Important"}</button> */}
        
        </div>
    </div>
}

// let todoList =[
//   { text: "Learn about React" , isImportant: false, time: new Date(), status: 0 , id:1},
//   { text: "Meet friend for lunch" ,isImportant: true, time: new Date() ,status: 1, id:2},
//   { text: "Build really cool todo app", isImportant: false , time: new Date(),status: 4, id:3},
//   { text: "Implement all functional requirement", isImportant: false , time: new Date(),status: 2, id:4},
//   { text: "Sync in local storage.", isImportant: false , time: new Date(),status: 3, id:5}
// ];
let k=0;
let todoList =[
  { text: "Learn about React" , isImportant: false, time: new Date(), status: 0 , id:`item-${k++}`},
  { text: "Meet friend for lunch" ,isImportant: true, time: new Date() ,status: 1, id:`item-${k++}`},
  { text: "Build really cool todo app", isImportant: false , time: new Date(),status: 4, id:`item-${k++}`},
  { text: "Implement all functional requirement", isImportant: false , time: new Date(),status: 2, id:`item-${k++}`},
  { text: "Sync in local storage.", isImportant: false , time: new Date(),status: 3, id:`item-${k++}`}
];

function TodoApp(){

  const ref = useRef(null);

  const [searchNote , setSearchNote] = useState("");
  const [todos, setTodos] = React.useState(todoList);
  const [editing, setEditing] = useState(true);

      React.useEffect(() => {
        const results = todoList.filter(todo =>
          todo.text.toLowerCase().includes(searchNote.toLowerCase())
        );
        setTodos(results);
      }, [searchNote]);

      React.useEffect(() => {
        window.localStorage.setItem('todo', JSON.stringify(todoList));
      }, [todos]);

    
      const addTodo = text =>{
          //  const newTodo = [...todos , {text: text,isImportant: false, time: new Date(),status: 0}];
          let dynamic_id= 6;
          todoList.push({text: text,isImportant: false, time: new Date(),status: 0, id: `item-${++dynamic_id}`});
         // setTodos(newTodo);
          setTodos(Array.from(todoList));
      }

      const onImportantTodo = index =>{
          console.log(index);
          const newTodo =[...todos];
          newTodo[index].isImportant = !newTodo[index].isImportant;
          setTodos(newTodo); 
      }

      const onEditTodo = index =>{
        if(editing) {
        //  debugger
          const slicedTodo = todoList.splice(index,1);
          setTodos(Array.from(todoList)); 
          setEditing(false);
          ref.current.editInput(slicedTodo);
        } else {
          alert("Edit one todo at a time.. :)");
        }
      }

      const onRemoveTodo = index =>{
         // let newTodo = [...todos];
         // console.log(newTodo.splice(index,1))
         // setTodos(newTodo);
         todoList.splice(index, 1);
         setTodos(Array.from(todoList));
      }

      const onStatusSelect = (status ,index) =>{
        console.log(status);
      //  debugger
        let newTodo = [...todos];
        newTodo[index].status = status_options.indexOf(status.value);
       setTodos(newTodo);
      }

      const searchTodo = searchString =>{
        console.log(searchString);
        setSearchNote(searchString);
      }

      const onSortClick = event =>{
        event.preventDefault();
        console.log("render");
        todoList.sort((a, b) => (a.text.toLowerCase > b.text.toLowerCase) ? 1 : -1);
       // todoList.sort((a, b) => (a.id > b.id) ? 1 : -1);
        setTodos(todoList)
      }

    return(<div className="app">
      <h1>Todo CRUD</h1>
      <TodoSearch searchTodo={searchTodo} onSortClick={onSortClick}/>
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

      <TodoForm addTodo={addTodo} ref={ref}  setEditing={() => setEditing(true)}/>
    </div>
  </div>)
}
export default TodoApp;