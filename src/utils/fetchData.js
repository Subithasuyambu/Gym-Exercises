export const exerciseOptions={
    method: 'GET',

  
  headers: {
    'X-RapidAPI-Key':'5767f1ef2amshe2792a0de596760p1ae2a8jsn3dd632a81554' ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
}};
 export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '5767f1ef2amshe2792a0de596760p1ae2a8jsn3dd632a81554',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData= async(url,options)=>
{
    const response =await fetch(url,options);
    const data=await response.json();

    return data;

}
//'5767f1ef2amshe2792a0de596760p1ae2a8jsn3dd632a81554'
