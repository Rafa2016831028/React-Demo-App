import React, { useState, useEffect } from "react";
import useDataFetcherByIds from "../../hooks/dataFetcherByIds";
import {timeSince, processUrl} from '../Shared/resource'
import { TiArrowSortedUp } from "react-icons/ti";

const AskCommentStories = (props) => {
    const parrentStory = props.location.state.story;
    const commentStoryIds =props.location.state.comments;
    const { isLoading, stories } = useDataFetcherByIds(commentStoryIds);
    console.log(parrentStory);
    console.log(stories);
    // return <div>ASK Comment {props.location.state.comments}</div>

    const addComment = () =>{
        alert("Not yet implemented..");
    }
    return(<React.Fragment>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <React.Fragment>
              <div className='item container1 icon-index'>
                  <div><TiArrowSortedUp color="#828282" front-size="1.5em !important" /></div>
              <div className="margin-left-5">
              <div>{parrentStory.title}</div>
              <div className="item-des margin-top-4">{parrentStory.score} points by {parrentStory.by} | {timeSince(new Date(Date.now()-(parrentStory.time/100000)))} ago  </div>
              <div className="margin-top-4" dangerouslySetInnerHTML={ {__html: parrentStory.text} }></div>
              <div><textarea rows="6" cols="80"></textarea></div>
              <div><input type="submit" value="add comment" className="margin-top-10" onClick={addComment}></input></div>
              </div>
              </div>
           <div>{stories.map(({ data: story }, index) => (
              <Story key={story.id} story={story} index={index}/>
            ))}</div> 
          </React.Fragment>
        )}
      </React.Fragment>);
}

export const Story =({key, story, index}) =>{
    return (
      <div className="container1">
          <div className='item' key={key}>
            {/* <div className="icon-index">{index}. </div> */}
            <div><TiArrowSortedUp color="#828282" /></div> 
            <div>
                <div className="item-des margin-left-10"> {story.by}  | {timeSince(new Date(Date.now()-(story.time/100000)))} ago  </div>
             <div className="margin-left-10 margin-top-4 font" dangerouslySetInnerHTML={ {__html: story.text} } ></div> 
            
            </div>
          </div>
        
      </div>
    )
  }
export default AskCommentStories;