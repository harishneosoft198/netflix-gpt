import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useTrailerVideo = (movieId)=>{

    const dispatch = useDispatch();
  // const [youtubeKey,setyKey] = useState(null);
  const getMovieVideos = async()=>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
    const data = await fetch(url,API_OPTIONS);
    const json = await data.json();
    

    const filteredData = json.results.filter(video=>video.type==='Trailer');
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    
    // setyKey(trailer.key);
    dispatch(addMovieTrailer(trailer));

  }
  useEffect(()=>{
    getMovieVideos();
  },[])

}

export default useTrailerVideo;