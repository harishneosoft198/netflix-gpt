import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../customHooks/usePopularVideos';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpcomingMovies from '../customHooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector(state=>state.gpt.showGptSearch);
  return (
    <div>
      <Header/>
      {showGptSearch ? <GptSearch/> : 
      <>
        <MainContainer/>
        <SecondaryContainer/>
      </>
      }
    </div>
  )
}

export default Browse