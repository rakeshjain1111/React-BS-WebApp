import React from 'react'
import  'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<h1>Home Page</h1>}></Route>
            <Route path='/blog' element={<h1>Blog Page</h1>}></Route>
            <Route path='/ref' element={<h1>Reference Page</h1>}></Route>
            <Route path='/learn' element={<h1>Learn Page</h1>}></Route>
            <Route path='/contact' element={<h1>Contact Page</h1>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;