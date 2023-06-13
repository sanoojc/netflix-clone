import React, { useEffect, useState } from "react"
import "./Banner.css"
import axios from "axios"
import { API_KEY, baseUrl, imageUrl } from "../../key"
function Banner(){
    const[movie,setMovies]=useState()
    useEffect(()=>{

        axios.get(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovies(response.data.results[0])
            console.log(response.data.results[0]);

        })
    },[])
    return(
        <div className="banner"
        style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}}>
            <div className="content">
                <h1 className="title">{movie?movie.title:""}</h1>
                <div className="buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h3 className="description">
                    {movie?movie.overview:""}
                </h3>
            </div>
            <div className="fade"></div>
        </div>
    )

}
export default Banner