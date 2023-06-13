import React, { useEffect, useState } from "react";
import Youtube from "react-youtube"
import axios from 'axios';
import "./RowPost.css";
import { API_KEY, baseUrl, imageUrl, originals } from "../../key";

function RowPost(props) {
    const [movies, setMovies] = useState([]);
    const [movieUrl,setMovieUrl]=useState('')
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    useEffect(() => {
        axios.get(props.url)
            .then((response) => {
                setMovies(response.data.results);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const handleMovie=(id)=>{
        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
        
            console.log("data",response.data.results[0])
            if(response.data.results.length!==0){
                setMovieUrl(response.data.results[0])
            }
        }).catch((err)=>{
            alert("No video found")
        })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                { movies.map((obj) => (
                    <img onClick={()=>handleMovie(obj.id)} className="poster" src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
                ))
                }
            </div>
          { movieUrl && <Youtube opts={opts} videoId={movieUrl.key}/> }
        </div>
    );
}

export default RowPost;
