export const getRoot = state => state.photoViewer;

export const getIndex = state => getRoot(state).index;

export const getPhotos = state => getRoot(state).photos;
