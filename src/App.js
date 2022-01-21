import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ListOfMovies from './components/ListOfMovies';
import { Data } from './data';
import AddNewMovie from './components/AddNewMovie';
import { useState } from 'react';

function App() {
  const [Movies, setMovies] = useState(Data)
  const addingNewMovie=(x)=>{
    return setMovies([...Movies,x])
  }
  return (
    <div className="App">
      <NavBar/>
      <AddNewMovie fun={addingNewMovie}/>
      <ListOfMovies movies={Movies} />
    </div>
  );
}

export default App;