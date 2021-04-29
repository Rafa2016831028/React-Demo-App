import React,{useState,useEffect} from 'react';
import '../Shared/base.css'
import {timeSince, processUrl} from '../Shared/resource'
import useDataFetcher from '../../hooks/dataFetcher';
import { TiArrowSortedUp } from "react-icons/ti";
import useDataFetcherByIds from '../../hooks/dataFetcherByIds';
import { Link} from "react-router-dom";
const AskStories = (props) => {
  const  type  = 'ask';
  
  const { isLoading, stories } = useDataFetcher(type);
  const [story, setStory] = useState([]);
  console.log(stories);

  useEffect(()=> {
    setStory(stories)
    debugger
  } ,[stories]);

  const askStoryComments = (comment_Ids , e) => {
    console.log(comment_Ids)
   // const { isLoading, stories } = useDataFetcherByIds(comment_Ids);
    debugger
  }
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
          {story.map(({ data: story }, index) => (
            <Story key={story.id} story={story} index={index} askStoryComments={askStoryComments}/>
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const Story =({key, story, index, askStoryComments}) =>{
  return (
    <div className="container1">
        <div className='item' key={key}>
          <div className="icon-index">{index}. </div> <TiArrowSortedUp color="#828282" />
          <div > <div><a href={story.url ? story.url : 'https://news.ycombinator.com/newest'}  >{story.title}</a><a className="item-des"> ({story.url? processUrl(story.url): 'http://www.sitename.com/'})</a></div> 
          {/* <div className="item-des margin-left-10"> {story.score} points by {story.by}  | {timeSince(new Date(Date.now()-(story.time/100000)))} ago   | <button onClick={(e) => askStoryComments(story.kids,e)}> {story.kids? story.kids.length: 0} comments</button></div> */}
          <div className="item-des margin-left-10"> {story.score} points by {story.by}  | {timeSince(new Date(Date.now()-(story.time/100000)))} ago   | <button><Link className="item-des icon-index"
           to={{
    pathname: '/story/' + key,
    state: { comments: story.kids }
  }} > {story.kids? story.kids.length: 0} comments</Link></button></div>
          </div>
        </div>
      
    </div>
  )
}
 
export default AskStories;