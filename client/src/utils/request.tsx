import axios from 'axios';

const request = axios.create({
    baseURL: 'https://time-planner-123.vercel.app/',
    // baseURL: 'http://localhost:3002/',
    withCredentials: true, // Cho phép gửi cookie
});
export default request;
