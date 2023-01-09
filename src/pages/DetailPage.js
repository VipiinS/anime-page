import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './DetailPage.css'
import { Container, Paper } from '@material-ui/core';
import useStyles from './styles';

const DetailPage = () => {
    const classes = useStyles();


    const {id} = useParams();
    const {animeItems} = useSelector((store)=>(store.anime));
    const item = animeItems.find((items=>{
        return items._id === id
    }))

  return (
    <>  
        {/* <div>DetailPage {id}</div> */}
        <Container className={classes.bigContainer}>
            <Paper elevation={3}>
                <div className='paper_container'>
                    <img src={item.image} alt={item.title}/>
                    <div className='infos'>
                        <h2 className="title">{item.title   }</h2>
                        <h4 className='ranking'>Ranking : {item.ranking}</h4>
                        <h4 className="genre">genres : action, adventure, romance</h4>
                        <h4 className="episodes">no of episodes: {item.episodes}</h4> 
                    </div>
                </div>
                    <div className='description'>
                        <p>{item.synopsis}</p>
                        <a href={item.link}>See more</a>
                    </div>
                <div>
                </div>
            </Paper>
        </Container>
    </>
  )
}

export default DetailPage