import { useEffect, useState } from "react";
import { getPlaces } from "./api";
import {categoryData} from './api/categoryData'
import NavigationBar from "./components/NavigationBar";
import ScrollIcons from "./components/ScrollIcons";
import Place from "./components/Place";

function App() {
  const [categories] = useState(categoryData);
  const [places, setPlaces] = useState([])

  useEffect(()=>{
    getPlaces().then(data=> setPlaces(data))
  },[])

  return (
    <div >
      <NavigationBar/>
      <div className='mx-5'><ScrollIcons categories={categories}/></div>
      <div className='row my-5 mx-2'>
        {places.map((place)=>{
          return <Place place={place}/>
        })}
      </div>
    </div>
  );
}

export default App;
