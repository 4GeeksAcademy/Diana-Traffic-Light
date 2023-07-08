import React from "react";
import Red from "./red.jsx";
import Yellow from "./yellow.jsx";
import Green from "./green.jsx";


const TrafficLight = () => {
  
  return (
    <div >
      <div><Red/>
      </div>
      <div>
      <Yellow/>
      </div>
      <div>
        <Green/>
      </div>
      
    </div>
  );
};

export default TrafficLight;
