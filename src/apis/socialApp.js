import axios from 'axios';

export default axios.create({
    baseURL: 'https://us-central1-social-tut-4b8e8.cloudfunctions.net/api',
});