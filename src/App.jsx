

// HERE Step.jsx is created in pages folder but it should be in components folder


import * as React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import ResumeGenerator from './Pages/ResumeGenerator';
import Form from './Pages/Form';
import PageNotFound from './Pages/PageNotFound';
import History from './Pages/History';
import Footer from './Components/Footer';


function App() {


  return (
    <>
    <Header/>

    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/resume' element={<ResumeGenerator/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/*' element={<PageNotFound/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
