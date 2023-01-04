import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllItems} from "./Slice";
import './App.css'
import Page from "./components/page";
import {changeOptions} from './Slice'

function App() {

  let options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {page: '1', size: '20', search: '', sortOrder: 'asc'},
    headers: {
      'X-RapidAPI-Key': '1f4595ff8amsh262facc5fe4502fp199435jsnee5812397c94',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  const dispatch = useDispatch();
  const {animeItems, isLoading, error } = useSelector((store)=>(store.anime))

  //for getting data from API for the first time..
  useEffect (()=>{
    dispatch(getAllItems(options))
  },[])

  const [name,setName] = useState("")
  const [emptyError,setEmptyError] = useState(false);

  // the loading screen
  if(isLoading){
    return <div className="loading">
      <div></div>
      <h1 className="loading-text">Loading</h1>
      <h2>Please wait....</h2>
      <span className="loader"></span>
      {error && <h3 className="error">Something went wrong</h3>}
    </div>
  }
    return(
      <div className="container">
          <input
            type="text"
            placeholder="Enter an anime name"
            onChange={(e)=>{
              setName(e.target.value)
            }}
          />
          <input
          type="submit"
          value="search"
          onClick={()=>{
            if(name === ''){
              setEmptyError(true)
            }
            else{
              setEmptyError(false)
            options = {
              method: 'GET',
              url: 'https://anime-db.p.rapidapi.com/anime',
              params: {page: '1', size: '20', search: name, sortOrder: 'asc'},
              headers: {
                'X-RapidAPI-Key': '1f4595ff8amsh262facc5fe4502fp199435jsnee5812397c94',
                'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
              }
            };
            dispatch(changeOptions(options))}
          }
        }
          />
        {emptyError && <h3 className="empty-error">Enter a name</h3>}
        <div className="App">
          <Page/>
        </div>
      </div>
    )
}

export default App;
