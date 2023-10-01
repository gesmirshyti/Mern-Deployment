import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PiratesForm from './components/PiratesForm'
import PiratesList from './components/PiratesList';
import PirateDetails from './components/PirateDetails';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PiratesForm />} path="/pirates/new" default />
          <Route element={<PiratesList />} path="/pirates" default />
          <Route element={<PirateDetails />} path="/pirates/:id" default />
        </Routes>
      </BrowserRouter>
      <br />
    </>
  )
}

export default App
