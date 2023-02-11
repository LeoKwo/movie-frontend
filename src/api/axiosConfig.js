import axios from 'axios';

export default axios.create({
    // baseURL:'https://9c96-103-106-239-104.ap.ngrok.io',
    // headers: {"ngrok-skip-browser-warning": "true"}
    baseURL:"https://cors-anywhere.herokuapp.com/",
    // headers:{
    //     "Access-Control-Allow-Origin":"*",
    //     "Access-Control-Allow-Methods":"DELETE, POST, GET, OPTIONS",
    //     "Access-Control-Allow-Headers":"Content-Type, Authorization, X-Requested-With"
    // }
});