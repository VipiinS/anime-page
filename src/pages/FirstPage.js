import React from 'react'
import { useSelector } from "react-redux";
import AnimeBox from '../components/AnimeBox/AnimeBox';
import { Container, Grid } from '@material-ui/core';
import useStyles from './styles';



const FirstPage = () => {
  const classes = useStyles();
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
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={2}>
          {Elements}
          </Grid>
        </Container>
      </div>
    </div>
  )
  )
}

export default FirstPage