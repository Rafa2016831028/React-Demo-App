import React from 'react';
import '../Shared/base.css'
import {timeSince, processUrl} from '../Shared/resource'
import useDataFetcher from '../../hooks/dataFetcher';
import { TiArrowSortedUp } from "react-icons/ti";
import {JobText} from '../../utils/constants.js'
const JobStories = (props) => {
  const  type  = 'job';
  
  const { isLoading, stories } = useDataFetcher(type);
  console.log(stories)
  return (
    <React.Fragment>
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <React.Fragment>
         <div className="container1">
             <div className='icon-index jobtext'>These are jobs at YC startups. See more at <a className='highlight-jobtext'>ycombinator.com/jobs</a>, or attend a virtual <a className='highlight-jobtext'>Jobs Expo on June 10 </a>for roles in engineering, product and design at YC startups.</div>
             {stories.map(({ data: story }, index) => (
            <Story key={story.id} story={story} index={index} />
          ))}</div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const Story =({key, story, index}) =>{
  return (
    <div className="container1">
        <div className='item' key={key}>
          {/* <div className="icon-index">{index}. </div> <TiArrowSortedUp/> */}
          <div > <div><a href={story.url ? story.url : 'https://news.ycombinator.com/newest'}  >{story.title}</a><a className="item-des"> ({story.url? processUrl(story.url): 'http://www.sitename.com/'})</a></div> 
          <div className="item-des margin-left-10"> {timeSince(new Date(Date.now()-(story.time/100000)))} ago </div>
          </div>
        </div>
      
    </div>
  )
}
 
export default JobStories;