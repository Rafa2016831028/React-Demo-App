import './todo.css';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';

const TodoSearch = ((props) => {

    const [searchNote , setSearchNote] = useState("");

    const handleChange =(e) =>{
        setSearchNote(e.target.value);
        props.searchTodo(searchNote);
    }
    return (<div className="search-form"><form className="todo">
        <input  type="text"
        className="input2"
        onChange={handleChange}
        value={searchNote} 
        placeholder="Search note."
         ></input>
        {/* <button type="submit" className="button2">Search</button> */}
    </form></div>)
});
export default TodoSearch;