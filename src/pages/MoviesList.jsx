import axios from "axios";
import { useState, useEffect } from "react";

export default function MoviesList() {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        console.log("Chiamo api");
        axios
            .get("http://localhost:3000/api/movies")
            .then((resp) => {
                setMovies(resp.data.result)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <h1>Movies to rental</h1>
            <ul>{
                movies.map((movie) =>( <li key={movie.id}> {movie.title}</li>))
            }</ul>
        </>
    );
}