import React from 'react'
import { useSelector } from "react-redux";
import AnimeBox from '../components/AnimeBox/AnimeBox';




const FirstPage = () => {
  
    const {animeItems} = useSelector((store)=>(store.anime));

      const Elements = animeItems.map((item)=>{
        return(
          <AnimeBox
            key = {item._id}
            id = {item._id}
            title = {item.title}
            genres = {item.genres}
            ranking = {item.ranking}
            image = {item.image}
            link={item.link}/>
          ) 
        }
      )

  return (
        (
    <div className="container">
      <div className="App">
        {Elements}
      </div>
    </div>
  )
  )
}

export default FirstPage