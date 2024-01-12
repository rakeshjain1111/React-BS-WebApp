import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <Header/>
         <div className='app'>     
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/blog' element={<Home/>}></Route>
              <Route path='/git' element={<h1>Git Page</h1>}></Route>
              <Route path='/github' element={<h1>Github Page</h1>}></Route>
              <Route path='/ref' element={<h1>Reference Page</h1>}></Route>
              <Route path='/learn' element={<h1>Learn Page</h1>}></Route>
              <Route path='/contact' element={<h1>Contact Page</h1>}></Route>
          </Routes>
         
         </div> 
         <Footer/>
    </BrowserRouter>
  );
}

export default App;