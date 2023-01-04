import React from 'react'
import { useSelector } from "react-redux";
import AnimeBox from './AnimeBox/AnimeBox';




const Page = () => {
  
    const {animeItems, isLoading } = useSelector((store)=>(store.anime));

      const Elements = animeItems.map((item)=>{
        return(
          <AnimeBox
            key = {item._id}
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

export default Page