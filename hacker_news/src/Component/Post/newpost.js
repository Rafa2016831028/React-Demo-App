import React,{useState,useEffect} from 'react';
import '../Shared/base.css'
import {timeSince, processUrl} from '../Shared/resource'
import useDataFetcher from '../../hooks/dataFetcher';
import { TiArrowSortedUp } from "react-icons/ti";

const ShowNewStories = (props) => {
  const  type  = 'new';
  
  const { isLoading, stories } = useDataFetcher(type);
  const [story, setStory] = useState([]);
  console.log(isLoading+" "+ stories);

  useEffect(()=> {
    setStory(stories)
  } ,[stories]);

  const newStoryHide = (index , e) => {
    // e.preventDefault();
    const storyTemp =[...story];
    storyTemp.splice(index ,1);
    setStory(storyTemp);
    debugger
  }
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {story.map(({ data: story }, index) => (
            <Story key={story.id} story={story} index={index} newStoryHide={newStoryHide}/>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const Story =({key, story, index, newStoryHide}) =>{
  
  return (
    <div className="container1">
        <div className='item' key={key}>
          <div className="icon-index">{index}. </div> <TiArrowSortedUp/>
          <div > <div><a href={story.url ? story.url : 'https://news.ycombinator.com/newest'}  >{story.title}</a><a className="item-des"> ({story.url? processUrl(story.url): 'http://www.sitename.com/'})</a></div> 
          <div className="item-des margin-left-10"> {story.score} points by {story.by}  | {timeSince(new Date(Date.now()-(story.time/100000)))} ago   |  <button onClick={(e) => newStoryHide(index,e)}> Hide</button> | past  </div>
          </div>
        </div>
      
    </div>
  )
}
 
export default ShowNewStories;