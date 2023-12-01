import { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../../axios";
import {imageUrl } from "../../constants/constants";
export default function RowPost(props) {
     const [movies, setMovies] = useState([]);
     useEffect(() => {
          axios.get(props.url).then((response) => {
                    setMovies(response.data.results);
               }
          ).catch((error) => {
            console.error(error.message);
          })
     }, []);
     return (
          <div className="row-post">
               <h2>{props.title}</h2>
               <div className="posters">
                    {movies.map((movie,index) => (
                         <img key={index} className={props.isSmall ? "small-poster" :"poster"}
                              src={`${imageUrl+movie.backdrop_path}`}
                              alt=""/>
                    ))}
               </div>
          </div>
     );
}
