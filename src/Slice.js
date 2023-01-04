import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


  
const options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {page: '1', size: '30', sortOrder: 'asc'},
    headers: {
      'X-RapidAPI-Key': '1f4595ff8amsh262facc5fe4502fp199435jsnee5812397c94',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  let theObj;

export const getAllItems = createAsyncThunk('./anime/getAllItems',
    async ()=>{
        try {
            await axios.request(options)
            .then((res)=>{
                theObj = res.data.data
                return theObj;
            })
            .catch(function (error) {
                console.error(error);
            });
        } catch (error) {
            console.log(error.response);
        }
})


const initialState = {
    animeItems:[],
    isLoading:true,
    quote:""
};

const slice = createSlice({
    name :  'anime' ,
    initialState,
    reducers:{
        getData:(state)=>{
            
        }
    },
    extraReducers:{
        [getAllItems.pending]:(state)=>{
            console.log("pending");
            state.isLoading = true
        },
        [getAllItems.fulfilled]:(state,action)=>{
            console.log("fulfilled");
            state.isLoading = false
            state.animeItems = theObj;
        },
        [getAllItems.rejected]:(state)=>{
            console.log("rejectd");
            state.isLoading = true
        }
    }
})

export const {getData} = slice.actions;
export default slice.reducer;

