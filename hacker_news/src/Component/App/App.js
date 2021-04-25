import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiArrowSortedUp } from "react-icons/ti";
 
function App() {
  const [data, setData] = useState({ hits: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux',
      );
      console.log(result)
      setData(result.data);
    };
 
    fetchData();
  }, []);
 
  return (
    <div className="container1">
      {data.hits.map((item,index)=> (
        <div className='item' key={item.objectID}>
          <div className="icon-index">{index}. </div> <TiArrowSortedUp/>
          <div className="item-text"> <a href={item.url}>{item.title}</a> 
          <div className="item-des"> {item.points} points by {item.author} </div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default App;