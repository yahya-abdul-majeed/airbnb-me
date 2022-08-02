import axios from 'axios'

export const getPlaces= async ()=>{
    const URL = 'https://airbnb19.p.rapidapi.com/api/v1/searchProperty';
    const options = {
      method: 'GET',
      params: {category: 'TAB_8225', totalRecords: '50', currency: 'USD', adults: '1'},
      headers: {
        'X-RapidAPI-Key': '87b72058f4mshba02c45194d0b20p1a2050jsnc445d6197aab',
        'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
      }
    };
    const {data :{data}} = await axios.get(URL, options);

    return data;
}