import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function Main () {
    return <App />
}
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
