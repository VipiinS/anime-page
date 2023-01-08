import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        padding:0
    },
    all:{
        
    },
    container: {
      backgroundColor: theme.palette.background.paper,
      width:'100vh',
    },
    icon:{
        marginRight: '20px',
    },
    button:{
        marginTop:'40px',
    },
    cardGrid:{
        // padding:'20px 0'

    },
    card:{
        height:'400px',
        width:'250px',
        padding:0,
        // display:'flex',
        // flexDirection:'column'
        display:'grid',
        gridTemplateRows:'1fr'
        
    },
    CardMedia:{
        paddingTop: '70%',
        margin:0,
        transition:"0.3s",
        '&:hover': {
            opacity: 0.7,
        },
    },

    CardContent:{
        flexGrow:1
    },
    title:{
        fontWeight:'700'
    },
    textFieldContainer:{
        height:'100px'
        
    },
    readMore:{
        position:'relative',
        bottom:'0',
        left:'0',
        cursor:'pointer'
    },
    link:{
        padding:0
    },

    bigContainer:{
        height:'1000'
    },
    bigCard:{
        height:'50vh',
        width:'50vh'
    },
    bigImage:{
        height:'100%',
        objectFit:'cover'
    },
  }))

  export default useStyles;