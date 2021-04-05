import './todo.css';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import { IconContext } from "react-icons";
import {AiOutlineSearch} from 'react-icons/ai';
const TodoSearch = ((props) => {

    return (<div className="search-form"><form className="todo">
        <input  type="text"
        className="input2"
        placeholder="Search note."
        onChange={(e) => props.searchTodo(e.target.value)} ></input>
        {/* <button type="submit" className="button2"><i class="fa fa-search"></i></button> */}
        <IconContext.Provider value={{ color: "blue", size:"2em" , className: "global-class-name" }}>
            <div><AiOutlineSearch/></div>
        </IconContext.Provider>
    </form></div>)
});
export default TodoSearch;