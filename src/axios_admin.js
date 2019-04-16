import axios from 'axios';

const instance = axios.create({
  baseUrl: "https://insta-7bcc9.firebaseio.com/"
})

export default instance;