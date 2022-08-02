import {useState, useEffect} from 'react'
import NavigationBar from '../components/NavigationBar';
import ScrollIcons from '../components/ScrollIcons';
import Place from '../components/Place';

function HomePage({places, categories}) {
  
    return (
      <div >
        <NavigationBar/>
        <div className='mx-5'><ScrollIcons categories={categories}/></div>
        <div className='row my-5 mx-2'>
          {places.map((place)=>{
            return <Place key={place.id} place={place}/>
          })}
        </div>
      </div>
    );
  }
  
  export default HomePage;