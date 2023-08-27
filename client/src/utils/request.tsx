import axios from 'axios';

const request = axios.create({
    baseURL: 'https://time-planner-123.vercel.app/',
    withCredentials: true, // Cho phép gửi cookie
});
export default request;
