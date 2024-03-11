import React from 'react'
import { Route,Routes} from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './Pages/ExerciseDetail';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

import './App.css'

export const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer></Footer>
      
    </Box>
  )
}
export default App;
