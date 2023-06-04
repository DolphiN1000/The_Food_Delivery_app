import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/goods";

export const fetchAllShops = createAsyncThunk(
    "shops/fetch-all",
    async(_, thunkAPI) => {
        try {
            const data = await api.getAllShops();
            return data;
        }
        catch({response}) {
            return thunkAPI.rejectWithValue(response.data);
        }
    }
)

// export const fetchAllShops = createAsyncThunk(
//     "shops/fetch-all",
//     async(_, thunkAPI) => {
//         try {
//             const data = await api.getAllShops();
//             return data;
//         }
//         catch({response}) {
//             return thunkAPI.rejectWithValue(response.data);
//         }
//     }
// )
