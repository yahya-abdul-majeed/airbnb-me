import { useEffect, useState , createContext } from "react";
import { getPlaces } from "./api";
import {categoryData} from './api/categoryData'
import HomePage from "./pages/homePage";
import DetailPage from "./pages/detailPage";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  const [categories] = useState(categoryData);
  const [places, setPlaces] = useState([])

  useEffect(()=>{
    getPlaces().then(data=> setPlaces(data))
  },[])

  const findPlaceById = (id) =>{
    return places.filter((place)=> place.id === id)[0];
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage places={places} categories={categories}/>}/> 
        <Route path='/details/:placeId' element={<DetailPage findPlaceById={findPlaceById}/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
