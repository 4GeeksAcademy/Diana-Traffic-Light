import React, { useState } from "react";

const Green = () => {
  const [isGreen, setIsGreen] = useState(false);


  return (
    
      <div className={`text-center ${isGreen ? "verdeBright" : ""}`} id="verde" onClick={()=>{setIsGreen(true)}}>b
      
      
    </div>
  );
};

export default Green;