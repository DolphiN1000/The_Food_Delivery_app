import { createSlice } from "@reduxjs/toolkit";

import order from './order-operations'

const initialState = {
    user:{},
    loading:false,
    error:null,
}