import { useState } from 'react';
import './App.css';
import AddMovie from './Components/AddMovie/AddMovie';
import { moviesData } from './Components/Constant/Data';
import FilterByName from './Components/FilterByName/FilterByName';
import MovieList from './Components/MovieList/MovieList';


function App() {
  const [movies, setMovies] = useState(moviesData)

  const add = (newMovie) => {
    setMovies([...movies,newMovie])
  }

  const [inputSearch, setInputSearch] = useState("")
  const [rating , setRating] = useState(1)

  const handleRating= (number) => {
    setRating(number)
  }

  return (
    <div className="App">
       
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}  handleRating={handleRating}/>  
      <MovieList movies={movies} inputSearch={inputSearch} rating={rating} setRating={setRating}/>
      <AddMovie add={add}/>
    </div>
  );
}

export default App;
