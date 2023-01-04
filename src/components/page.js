import React from 'react'
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Slice from '../Slice';
import AnimeBox from './AnimeBox/AnimeBox';




const Page = () => {
// console.log("inside page component");

    const {animeItems, isLoading } = useSelector((store)=>(store.anime));
    // console.log("animeItems"+animeItems);

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