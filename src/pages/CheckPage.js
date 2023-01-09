import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllItems } from "../Slice";
import './Checkpage.css'
import FirstPage from "./FirstPage";
import { changeOptions } from "../Slice";
import { Alert } from "@mui/material";
import { Container, CssBaseline, Typography } from "@material-ui/core";

function CheckPage() {
  let options

  const dispatch = useDispatch();
  const {isLoading, error } = useSelector((store)=>(store.anime))
  const [name,setName] = useState("")
  const [emptyError,setEmptyError] = useState(false);
  //for getting data from API for the first time..
  useEffect (()=>{
    dispatch(getAllItems())
  },[])


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

      <CssBaseline>

        <Container style={{ background: '#eeeeee' }}>  
          <FirstPage/>
      </Container>
      </CssBaseline>
    )
}

export default CheckPage;
