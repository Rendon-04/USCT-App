const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'http://54.213.207.219'  //  production backend IP
  : 'http://localhost:6060';  //  local development backend URL

export default API_BASE_URL;