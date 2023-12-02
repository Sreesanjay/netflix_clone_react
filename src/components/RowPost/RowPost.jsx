import { useEffect, useState } from "react";
import YouTube from "react-youtube"
import "./RowPost.css";
import axios from "../../axios";
import {imageUrl } from "../../constants/constants";
import { API_KEY } from "../../constants/constants";
export default function RowPost(props) {
     const [movies, setMovies] = useState([]);
     const [movieKey,setmovieKey] = useState()
     useEffect(() => {
          axios.get(props.url).then((response) => {
                    console.log(response);
                    setMovies(response.data.results);
               }
          ).catch((error) => {
            console.error(error.message);
          })
     }, []);

     const handleTrailer = (trailer) => {
          axios.get(`movie/${trailer}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
               if(response.data.results.length !==0) setmovieKey(response.data.results[0]?.key)
          })
     }

     //options for YouTube.
     const opts = {
          height: '390',
          width: '100%',
          playerVars: {
            autoplay: 1,
          },
        };

     return (
          <div className="row-post">
               <h2>{props.title}</h2>
               <div className="posters">
                    {movies.map((movie,index) => (
                         <img 
                              onClick={()=>handleTrailer(movie.id)}
                              key={index} className={props.isSmall ? "small-poster" :"poster"}
                              src={`${imageUrl+movie.backdrop_path}`}
                              alt=""/>
                    ))}
               </div>
               {movieKey && <YouTube videoId={movieKey} opts={opts}/>}
          </div>
     );
}
