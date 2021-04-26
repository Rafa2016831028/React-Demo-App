import {getStories} from '../utils/apis';
import React , {useEffect, useState} from 'react';

const useDataFetcher = (type) =>{
    const [stories , setStories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true);
        getStories(type)
        .then((stories) =>{
            setStories(stories);
            setIsLoading(false);
        })
        .catch((error)=>{
            console.warn('warn    '+error);
            setIsLoading(false);
        })
    } ,[type]);

    return {isLoading, stories}
}

export default useDataFetcher;