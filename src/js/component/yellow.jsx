import React, { useState } from "react";

const Yellow = () => {
  const [isYellow, setIsYellow] = useState(false);


  return (
    
      <div className={`text-center ${isYellow ? "amarilloBright" : ""}`} id="amarillo" onClick={()=>{setIsYellow(true)}}>b
      
    </div>
  );
};

export default Yellow;