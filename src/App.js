import { Link, Route, Routes } from "react-router-dom";
import CheckPage from "./pages/CheckPage";
import DetailPage from "./pages/DetailPage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeOptions} from "./Slice";
import { getAllItems } from "./Slice";

import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import DataObjectIcon from '@mui/icons-material/DataObject';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Alert } from "@mui/material";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function App() {



    let options

    const dispatch = useDispatch();
    const [name,setName] = useState("")
    const [emptyError,setEmptyError] = useState(false);

    return(
      <>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={()=>{console.log("clced")}}

          >
            <DataObjectIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            AniD
          </Typography>
          
          <Search>
            <StyledInputBase
              placeholder="Search…"
              label="small"
              size="small"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
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
              dispatch(changeOptions(options))
              dispatch(getAllItems())
            }
          }
        }

          >
            <TravelExploreIcon/>
          </IconButton>
          </Search>
          {emptyError && <Alert severity="error" variant="standard">
          <Typography variant="subtitle1">
          Enter a valid name
          </Typography>
          </Alert>}
        </Toolbar>
      </AppBar>
    </Box>



      <Link to='/'>Home</Link>
      <Routes>
        <Route path="/" element={<CheckPage/>}/>
        <Route path='/:id' element={<DetailPage/>}/>
      </Routes>
      </>
    )
}

export default App;
