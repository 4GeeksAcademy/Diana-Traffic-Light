import React, { useState } from "react";

const Red = () => {
  const [isRed, setIsRed] = useState(false);


  return (
    
      <div className={`text-center ${isRed ? "rojoBright" : ""}`} id="rojo" onClick={()=>{setIsRed(true)}}>b
      
      
    </div>
  );
};

export default Red;
