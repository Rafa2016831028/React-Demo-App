
import ReactDOM from "react-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  ListItemSecondaryAction
} from "@material-ui/core";
import RootRef from "@material-ui/core/RootRef";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import InboxIcon from "@material-ui/icons/Inbox";
import EditIcon from "@material-ui/icons/Edit";
import './todo.css';
import TodoForm from './todoInput';
import React,{ useState , useRef , forwardRef, useImperativeHandle} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import TodoSearch from './todoSearch';
import { IconContext } from "react-icons";
import {AiFillStar} from 'react-icons/ai';


let k=0;
let todoList =[
    { text: "Learn about React" , isImportant: false, time: new Date(), status: 0 , id:`item-${k++}`},
    { text: "Meet friend for lunch" ,isImportant: true, time: new Date() ,status: 1, id:`item-${k++}`},
    { text: "Build really cool todo app", isImportant: false , time: new Date(),status: 4, id:`item-${k++}`},
    { text: "Implement all functional requirement", isImportant: false , time: new Date(),status: 2, id:`item-${k++}`},
    { text: "Sync in local storage.", isImportant: false , time: new Date(),status: 3, id:`item-${k++}`}
  ];
  console.log(todoList)

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    text: todoList[k].text
  }));
 
  console.log(getItems(5))
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // styles we need to apply on draggables
  ...draggableStyle,

  ...(isDragging && {
    background: "rgb(235,235,235)"
  })
});

const getListStyle = isDraggingOver => ({
  //background: isDraggingOver ? 'lightblue' : 'lightgrey',
});

function DND({todo, index ,onImportantTodo,onEditTodo, onRemoveTodo, onStatusSelect}) {
  const [items, setItems] = useState([...todoList]);
  const onDragEnd =(result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items_ = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(items_);
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
    return (<div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <RootRef rootRef={provided.innerRef}>
              <List style={getListStyle(snapshot.isDraggingOver)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <ListItem
                        ContainerComponent="li"
                        ContainerProps={{ ref: provided.innerRef }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <ListItemIcon>
                          <InboxIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={item.text}
                          secondary={item.secondary}
                        />
                        <ListItemSecondaryAction>
                        {/* <Dropdown className="dropdown"  options={status_option_modified} onChange={(e) => onStatusSelect(e, index)} value={status_options[todo.status]} placeholder="Status" /> */}
                       <button class="button2" onClick={() => onEditTodo(index)}>Edit</button>
                       <button  class="button2" onClick={() => onRemoveTodo(index)}>Remove</button>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            </RootRef>
          )}
        </Droppable>
      </DragDropContext>
    </div>);
} 

function TodoDndApp(){
  return (<div></div>);
}
export default DND;