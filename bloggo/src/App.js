import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import BlogPage from './components/BlogPage';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {

  const [login, setLogin] = useState(()=>{
    const token = localStorage.getItem('accessToken');
    return token;
  })

  return (
    <div className="h-100">
      {login === null ? <LoginPage setLogin = {setLogin}/> : <BlogPage setLogin = {setLogin}/> }
        
    </div>
  );
}

export default App;
