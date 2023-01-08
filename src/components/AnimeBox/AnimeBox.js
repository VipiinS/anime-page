import React from 'react'
// import './animeBox.css' 
import { Link } from 'react-router-dom'
import {  Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core'
import useStyles from '../../pages/styles'
import ReadMoreSharpIcon from '@mui/icons-material/ReadMoreSharp';

const AnimeBox = (props) => {
  const classes = useStyles();

    const genreElements = <Typography variant='subtitle2' align='center'>
      {props.genres.map((genre)=>(
        `${genre} `
      ))}
    </Typography>
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} >
        <Card className={classes.card}>
        <Link to={`/${props.id}`} className={classes.link}> 
          <CardMedia
            className={classes.CardMedia}
            image={props.image}
            title='bleach'
            />
        </Link>
          <CardContent className={classes.cardContent} style={{ background: '#fafafa' }}>
            <Typography variant='h6' className='classes.title'>{props.title}</Typography>
            <Typography variant='subtitle1' align='center'>Ranking: {props.ranking}</Typography>
            {genreElements}
            <Link to={`/${props.id}`}>
              <ReadMoreSharpIcon className={classes.readMore} fontSize='large'/>
            </Link>
          </CardContent>
        </Card>
      </Grid>
  )
}

export default AnimeBox
        // <div className='anime-container'>
        //   <img src={props.image} alt='bleach'/>
        //   <div className='info-container'>
        //     <div className='title-container'>
        //       <h3 className='title'>{props.title}</h3>
        //     </div>
        //     <h4 className='ranking'>Ranking : {props.ranking}</h4>
        //     {genreElements}
        //   </div>
        //   <p>See more..</p>
        // </div>