import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import * as actions from './slice'
import * as selectors from './selectors '
import styles from './PhotoViewer.module.css';
import Button from '../styledComponents/Button/Button'

const PhotoViewer = () => {
const dispatch = useDispatch();
const photos = useSelector((state) => selectors.getPhotos(state));
const index = useSelector((state) => selectors.getIndex(state));

    useEffect(() => {
        dispatch(actions.fetchPhotos());
    },
        [actions.fetchPhotos, dispatch]
    );

    return (
        <div className={styles.wrapper}>
            {photos.length
            ? <img src={photos[index].download_url} alt={ photos[index].title } width={200}/>
            : <div>No Photos</div>}
            {index}
            <div className={styles.buttonWrapper}>
            <Button onClick={() => dispatch(actions.previous())} text='Prev'/>
            <Button onClick={() => dispatch(actions.next())} text='Next'/>
            </div>
            <button onClick={() => dispatch(actions.previous())}>Prev - unstyled</button>
        </div>
    );
};

export default PhotoViewer;
