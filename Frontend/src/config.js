
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'http://54.213.207.219/' 
  : 'http://localhost:6060';
export default API_BASE_URL;