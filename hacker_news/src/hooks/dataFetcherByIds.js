import {getStoriesByIdList} from '../utils/apis';
import React , {useEffect, useState} from 'react';

const useDataFetcherByIds = (storyIds) =>{
    const [stories , setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        getStoriesByIdList(storyIds)
        .then((stories) =>{
            setStories(stories);
            setIsLoading(false);
        })
        .catch((error)=>{
            console.warn('warn    '+error);
            setIsLoading(false);
        })
    } ,[storyIds]);

    return {isLoading, stories}
}

export default useDataFetcherByIds;