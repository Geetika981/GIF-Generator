import React, { useEffect, useState } from "react";

import useGif from "../customHook/useGif";

const Random = () => {
  const {gif,handleClick}=useGif();
  
  return (
    <div>
      <img width="200px" height="200px" src={gif} alt="" />
      <button onClick={handleClick}>Click for new Gif</button>
    </div>
  );
};

export default Random;
