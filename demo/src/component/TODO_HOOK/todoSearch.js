import './todo.css';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import { IconContext } from "react-icons";
import {AiOutlineSearch} from 'react-icons/ai';
const TodoSearch = ((props) => {

    return (<div className="search-form"><form className="todo">
        <IconContext.Provider value={{ color: "blue", size:"2em" , className: "global-class-name" }}>
            <div><AiOutlineSearch/></div>
        </IconContext.Provider>
        <input  type="text"
        className="input2"
        placeholder="Search note."
        onChange={(e) => props.searchTodo(e.target.value)} ></input>
        {/* <button type="submit" className="button2"><i class="fa fa-search"></i></button> */}
        {/* <Select/> */}
        <button type="submit" className="button2" onClick={(e) => props.onSortClick(e)}>Sort</button>
    </form></div>)
});



class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state = {color: 'blue'};
    }
  
      changeColor(e) {
        this.setState({
          color: e.target.value
      })
    }
    
    render() {
      return (
              <div>
                 <select className="customized-dropdown" style={{backgroundColor: this.state.color}} ref="dropDownColor" onChange={this.changeColor.bind(this)}>
                        <option value="aqua" style={{color: 'blue',height:"20px !important",backgroundColor:"white",fontSize: "14"}}>Blue</option>
                        <option value="red" style={{color: 'red', backgroundColor:"white"}}>Red</option>
                        <option value="orange" style={{color: 'orange',backgroundColor:"white"}}>Orange</option>
                        <option value="green" style={{color: 'green',backgroundColor:"white"}}>Green</option>
                  </select>
              </div>
      );
    }
  }
export default TodoSearch;