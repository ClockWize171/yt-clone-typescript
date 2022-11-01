import { createSlice, configureStore } from "@reduxjs/toolkit";
import { InitialState } from "../Types";

const initialState: InitialState = {
    images: [],
    currentImages: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideos: [],
}

const PexelSlice = createSlice({
    name: 'youtubeApp',
    initialState,
    reducers: {},
    extraReducers:(builder=> {

    }),
})

export const store = configureStore({
    reducer: {
        youtubeApp: PexelSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;