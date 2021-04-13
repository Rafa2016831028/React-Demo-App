import './todo.css';
import chroma from "chroma-js";
import Select from "react-select";
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import { propTypes } from "react-bootstrap/esm/Image";

  const statusOptions =[
{ value: 'Pending', label: 'Pending', color: '#0052CC' },
{ value: 'Progressing', label: 'Progressing', color: '#FFC400' },
{ value: 'Completed', label: 'Completed', color: '#FF8B00' },
{ value: 'Postponed', label: 'Postponed', color: '#5243AA' },
{ value: 'Rejected', label: 'Rejected', color: '#FF5630' },
];

const dot = (color = "#ccc") => ({
  alignItems: "center",
  display: "flex",

  ":before": {
    backgroundColor: color,
    borderRadius: 10,
    content: '" "',
    display: "block",
    marginRight: 8,
    height: 15,
    width: 15
  }
});

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "white",
    width: "140px"
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    // console.log(window.innerWidth)
    // debugger;
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : null,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? chroma.contrast(color, "white") > 2
          ? "white"
          : "black"
        : data.color,
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor:
          !isDisabled && (isSelected ? data.color : color.alpha(0.3).css())
      }
    };
  },
  input: (styles) => ({ ...styles, ...dot() }),
  placeholder: (styles) => ({ ...styles, ...dot() }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) })
};

function DropdownComponent ({todo, onStatusSelect, index}){
  const handleSelect = (event) =>{
    debugger
    console.log(window.innerWidth)
    onStatusSelect(event, index)
    console.log(todo);
  }
    return (<Select
        className="dropdown"
        defaultValue={statusOptions[todo.status]}
        label="Single select"
        options={statusOptions}
        styles={colourStyles}
        onChange={(e) =>{handleSelect(e)}}
      />)    
}

export default DropdownComponent;
