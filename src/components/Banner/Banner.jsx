import "./Banner.css"
import axios from "../../axios"
import { API_KEY , imageUrl } from "../../constants/constants"
import { useEffect } from "react"
import { useState } from "react"
export default function Banner() {
    const [movie,setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            let randomeNumber = Math.floor(Math.random()* 20)
            setMovie(response.data.results[randomeNumber])
        }).catch(()=>{
            window.alert("Network error!")
        })
    },[])
    return (
        <div className="banner" 
            style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}}
        >
            <div className="content">
                <h1 className="title">{movie && (movie.title ? movie.title : movie.name)}</h1>
                <div className="button-grp">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <h1 className="discription">{movie && movie.overview} </h1>
            </div>
            <div className="bottom-fade"></div>
        </div>
    )
}
