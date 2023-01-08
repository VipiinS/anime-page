import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

let theObj;

export const getAllItems = createAsyncThunk('./anime/getAllItems',

    async (options,{dispatch,getState})=>{

        //to use the parameter passed to the creat easync thunk funtion
        // console.log(options);
        // to use the reducer functions inside the create asyncthunk function
        // dispatch(getData());
        // to use the states in the store,we can use this 
        // const state = useState();

        const state = getState()
        try {
            await axios.request(state.anime.options)
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
    quote:"",
    error:false,
    options : {
        method: 'GET',
        url: 'https://anime-db.p.rapidapi.com/anime',
        params: {page: '1', size: '30', sortOrder: 'asc'},
        headers: {
          'X-RapidAPI-Key': '1f4595ff8amsh262facc5fe4502fp199435jsnee5812397c94',
          'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
      }
};

const slice = createSlice({
    name :  'anime' ,
    initialState,
    reducers:{
        getData:(state)=>{

        },
        changeOptions:(state,action)=>{
            state.options = action.payload;
            console.log(current(state))
        }
    },
    extraReducers:{
        [getAllItems.pending]:(state)=>{
            console.log("pending");
            state.isLoading = true
        },
        [getAllItems.fulfilled]:(state,action)=>{
            console.log("fulfilled");
            state.isLoading = false;
            state.error = false;
            state.animeItems = theObj;
            console.log(theObj);
        },
        [getAllItems.rejected]:(state)=>{
            console.log("rejectd");
            state.isLoading = false
            state.error = true
        }
    }
})

export const {getData,changeOptions} = slice.actions;
export default slice.reducer;

