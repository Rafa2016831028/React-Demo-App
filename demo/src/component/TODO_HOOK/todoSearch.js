import './todo.css';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';

const TodoSearch = ((props) => {

    // const [searchNote , setSearchNote] = useState("");

    // const handleChange =(e) =>{
    //     props.searchTodo(e.target.value);
    // }
    return (<div className="search-form"><form className="todo">
        <input  type="text"
        className="input2"
        placeholder="Search note."
        onChange={(e) => props.searchTodo(e.target.value)} ></input>
        {/* <button type="submit" className="button2"><i class="fa fa-search"></i></button> */}
    </form></div>)
});
export default TodoSearch;