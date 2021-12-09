import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import BlogPage from './components/BlogPage';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {

  const [login, setLogin] = useState(()=>{
    const token = localStorage.getItem('login');
    return token;
  })

  return (
    <div className="h-100">
      {login === 'true' ? <BlogPage/> : <LoginPage setLogin = {setLogin}/> }
        
    </div>
  );
}

export default App;
