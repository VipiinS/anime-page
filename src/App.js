import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllItems} from "./Slice";
import AnimeBox from "./components/AnimeBox/AnimeBox";
import './App.css'
import Page from "./components/page";

function App() {

  const dispatch = useDispatch();
  const {animeItems, isLoading } = useSelector((store)=>(store.anime))

  useEffect (()=>{
    dispatch(getAllItems())
  },[])


  if(isLoading){
    return <div className="loading">
      <h1>Loading</h1>
    </div>
  }

    return(
      <div className="container">
      <div className="App">
        <Page/>
      </div>
    </div>
    )


  
}

export default App;
