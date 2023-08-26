import axios from 'axios';

const request = axios.create({
    baseURL: 'https://time-planner-test.vercel.app/',
    withCredentials: true, // Cho phép gửi cookie
});
export default request;
