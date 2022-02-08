import axios from 'axios';

export const fetchPhotos = () => {
    const response = axios.get('https://picsum.photos/v2/list')
    .then(r => r.data);
    return response
}
