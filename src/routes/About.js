import React from "react";
import "../components/Navigation.css";


function About(props){
  console.log(props);
  return(
      <div className="desc__wrap">
         <span className="movie__desc">
         Unlike history books tell us, Adolf Hitler did not commit suicide in his bunker, but instead fled to the African continent in his submarine. Teaming up with his new right hand, inf...
         </span>
      </div>
  );
}

export default About;