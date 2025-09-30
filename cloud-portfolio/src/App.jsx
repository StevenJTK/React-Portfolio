import { useState } from 'react'
import './App.css'
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import Main from "./components/main.jsx";


function App() {
    return (
    <>
        <Header/>
        <Navbar/>
        <Main/>
        <Footer/>
    </>
  )
}

export default App
