import React, { useEffect, useState } from "react";
import "./des.css" ;

function Description({ match, movies }) {
  const [movie, setMovie] = useState({});
  console.log(match.params.id);
  useEffect(() => {
    setMovie(movies.find((mv) => mv.id === match.params.id));
  }, []);
  return (
    <div  style={{ backgroundColor: "black" ,height:"100vh" }} >
    
      <h2 >{movie.titre}</h2>
      <p className="des">{movie.description}</p>

    </div>
  );
}

export default Description;
