import './todo.css';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';


const TodoForm = forwardRef((props, ref) => {
    const [todo, setTodo] = React.useState("");
    const [editedTodoInfo, setEditedTodoInfo] = React.useState({});
    useImperativeHandle(ref, () => {
        return {
          editInput: editInput
        };
      });

      const editInput = todo =>{
          console.log(todo);
          setTodo(todo[0].text);
          setEditedTodoInfo(todo);
      }

    const handleSubmit = e => {
        e.preventDefault();
         if(!todo) return;
         props.setEditing(false);
        props.addTodo(todo, editedTodoInfo);
        setTodo("");
        setEditedTodoInfo({})
    }

    const handleChange = e =>{
        setTodo(e.target.value)
    }

    return (<form onSubmit={handleSubmit} className="todo">
        <input  type="text"
        className="input2"
        value={todo} 
        placeholder="Write your note."
        onChange={handleChange} ></input>
    </form>)
});

export default TodoForm;