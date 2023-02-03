
import React from 'react'
import AppNavbar from './components/NavBar';
import Home from './pages/Home';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorPage from '.components/pages/404/404';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import {useContext} from "react";
import { MyContext } from "./context"

function App() {
  let  user: any = useContext(MyContext);
  return (
    <Router>
    <div className="Jumbo">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>
        {!user && (
          <>
        <Route path="/login" element={<Login/>}>
          
        </Route>
        <Route path="/signup" element={<Signup/>}>
        </Route>
          </>
        )}
        <Route path="*" element={<ErrorPage/>} >
          
        </Route>
        
      </Routes>
    </div>
    </Router>
  )
}

export default App;