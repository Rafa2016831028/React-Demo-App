import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function New() {
  const [data, setData] = useState([]);
 
  useEffect(async () => {
    const result = await axios(
      'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty',
    );
 
    setData(result.data);
    debugger
     console.log(result.data);
  });
 
  return (
    <ul>
      {/* {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))} */}
       hey
    </ul>
  );
}
 
export default New;