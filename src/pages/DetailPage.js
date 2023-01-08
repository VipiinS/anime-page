import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './DetailPage.css'
import { Card, CardMedia, Container } from '@material-ui/core';
import useStyles from './styles';

const DetailPage = () => {
    const classes = useStyles();


    const {id} = useParams();
    const {animeItems} = useSelector((store)=>(store.anime));
    console.log(animeItems);
    const item = animeItems.find((items=>{
        console.log("all id:"+ animeItems._id);
        return items._id === id
    }))
    console.log(item);

  return (
    <>  
        <div>DetailPage {id}</div>

    </>
  )
}
    // <div>DetailPage {id}</div>
    //     <div className="container">
    //         <div className="container1">
    //             <img src ={item.image} alt={item.title}/>
    //             <div className="infos">
    //                 <h2 className="title">{item.title   }</h2>
    //                 <h4 className='ranking'>Ranking : {item.ranking}</h4>
    //                 <h4 className="genre">genres : action, adventure, romance</h4>
    //                 <h4 className="episodes">no of episodes:{item.episodes}</h4>
    //                 <a href={item.link}>
    //                     <img className="thumb" src={item.thumb} alt="item.title"/>
    //                 </a>
    //         </div>
    //     </div>
    //     <p>{item.synopsis}</p>
    // </div>

export default DetailPage