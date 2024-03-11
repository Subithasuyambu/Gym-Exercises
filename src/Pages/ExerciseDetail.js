import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import { exerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../Components/Detail';
import SimilarExercises from '../Components/SimilarExercises';
import ExerciseVideos from '../Components/ExerciseVideos';
export const ExerciseDetail = () => {

  const [exerciseDetail,setexerciseDetail]=useState({});
  const [exerciseVideos,setExerciseVideos]=useState([]);
  const [targetMuscleExercises,setTargetMuscleExercises]=useState([]);
  const [equipmentMuscleExercises,setEquipmentMuscleExercises]=useState([]);
  const{id}=useParams();
  useEffect(()=>{
    const fetchExercisesData =async() =>{
     const exerciseDbUrl ='https://exercisedb.p.rapidapi.com';


     const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com'; 
     const exerciseDetailData=await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
     setexerciseDetail(exerciseDetailData);

     
     const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);
     setExerciseVideos(exerciseVideosData.contents);


     const targetMuscleExercises =await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions);
     setTargetMuscleExercises(targetMuscleExercises);
     
     const equipmentMuscleExercises =await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions);
     setEquipmentMuscleExercises(equipmentMuscleExercises);
    };
    fetchExercisesData();

  },[id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises}
      equipmentMuscleExercises={equipmentMuscleExercises}/>
    </Box>
  )
}
export default ExerciseDetail;