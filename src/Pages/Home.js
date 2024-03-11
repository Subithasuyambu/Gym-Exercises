import React,{useState} from 'react';
import{Box} from '@mui/material';
import Exercises from '../Components/Exercises';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';

export const Home = () => {
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises]=useState([]);
   //console.log(bodyPart);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises  
      excercise={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      />
      <Exercises   
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart} 
     />
      </Box>
  )
}
export default Home;
