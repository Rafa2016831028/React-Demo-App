import './todo.css';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import { IconContext } from "react-icons";
import {AiOutlineSearch} from 'react-icons/ai';
const TodoSearch = ((props) => {

    return (<div className="search-form"><form className="search-todo">
        <IconContext.Provider value={{ color: "blue", size:"2em" , className: "global-class-name" }}>
            <div><AiOutlineSearch/></div>
        </IconContext.Provider>
        <input  type="text"
        className="input2"
        placeholder="Search note."
        onChange={(e) => props.searchTodo(e.target.value)} ></input>
        {/* <button type="submit" className="button2"><i class="fa fa-search"></i></button> */}
        {/* <Select/> */}
        <button type="submit" className="sort-button" onClick={(props.onSortClick)}>Sort</button>
    </form></div>)
});


export default TodoSearch;