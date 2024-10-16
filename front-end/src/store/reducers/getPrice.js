import { createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY_PRICE = process.env.REACT_APP_STOCK_PRICE_VOLUME_KEY;

export const getPrice = createAsyncThunk(
    "stock/App/price",
    async(isNext,{getState}) =>{
        const {
            stockApp:{nextPageToken : nextPageTokenFromState,prices},
        } = getState();
    }

    const response = await axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo`);
)