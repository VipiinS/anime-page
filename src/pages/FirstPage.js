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
        <Container className={classes.cardGrid} maxWidth='lg'>
          <Grid container spacing={4}>
          {Elements}
          </Grid>
        </Container>
  )
  )
}

export default FirstPage