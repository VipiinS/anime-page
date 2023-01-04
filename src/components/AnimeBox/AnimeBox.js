import React from 'react'
import './animeBox.css' 


const AnimeBox = (props) => {
    const genreElements = <p className='genres'>
      {props.genres.map((genre)=>(
        `${genre} `
      ))}
    </p>
    return (
    <div>
        <div className='anime-container'>
          <img src={props.image} alt='bleach'/>
          <div className='info-container'>
            <div className='title-container'>
              <h3 className='title'>{props.title}</h3>
            </div>
            <h4 className='ranking'>Ranking : {props.ranking}</h4>
            {genreElements}
          </div>
        </div>
    </div>
  )
}

export default AnimeBox