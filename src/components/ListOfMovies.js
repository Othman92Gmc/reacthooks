import React from 'react'
import MovieCard from './MovieCard'

function ListOfMovies({movies}) {
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
            {movies.map(el=><MovieCard title={el.title} rate={el.rate} description={el.description} url={el.posterUrl} />)}
        </div>
    )
}

export default ListOfMovies