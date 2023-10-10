import React from 'react'
import { useState,useEffect } from 'react';
import axios from "axios";

const useGif = (tag) => {
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}`
    const [gif, setGif] = useState("");

    const response = async (tag) => {
      const { data } = await axios.get(tag?`${url}&tag=${tag}`: url);
      setGif(data.data.images.downsized_large.url);
    };
    useEffect(()=>{
      response(tag);
    },[tag])
    const handleClick=()=>{
        response(tag);
    }
  return {gif,handleClick}
}

export default useGif