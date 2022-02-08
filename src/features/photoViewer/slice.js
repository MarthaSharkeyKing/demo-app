import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    test: 'TEST',
    index: null,
    photos: [],
    fetching: false,
    fetchingError: null
};

export const photoViewerSlice = createSlice({
  name: 'photoViewer',
  initialState,
  reducers: {
    previous: (state) => {
        return {
        ...state,
        index: state.index === 0 ? state.photos.length - 1 : state.index - 1
    }},
    next: (state) => {
        return {
            ...state,
            index: state.index === state.photos.length - 1 ? 0 : state.index + 1
        };
    },
    fetchPhotos: (state, action) => {
        return {
            ...state,
            fetching: true,
            index: 0
        };
    }, 
    fetchPhotosSuccess: (state, action) => {
        return {
            ...state,
            photos: action.payload.photos,
            fetching: false,
            index: 0
        };
    },
    fetchPhotosError: (state, action) => {
        return {
            ...state,
            fetching: false,
            fetchingError: action.payload.message
        };
    }
  },
});

export const { previous, next, fetchPhotos, fetchPhotosSuccess, fetchPhotosError } = photoViewerSlice.actions;

export default photoViewerSlice.reducer;