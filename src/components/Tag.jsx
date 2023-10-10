import React, { useEffect, useState } from "react";
import axios from "axios";
import useGif from "../customHook/useGif";

const Tag = () => {
    const [tag,setTag]=useState('');
  const {gif,handleClick}=useGif(tag);
  return <div>
    <input type="text" onChange={(e)=>setTag(e.target.value)} />
    <img width="200px" height="200px" src={gif} alt="" />
    <button onClick={handleClick} >Click for GIF</button>
  </div>;
};

export default Tag;
