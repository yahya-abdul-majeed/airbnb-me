import axios from 'axios'

export const getPlaces= async ()=>{
    const URL = 'https://airbnb19.p.rapidapi.com/api/v1/searchProperty';
    const options = {
        method: 'GET',
        params: {category: 'TAB_8225', totalRecords: '50', currency: 'USD', adults: '1'},
        headers: {
          'X-RapidAPI-Key': '75cccefb27msh1adfb45b78864d3p13d6dcjsnbeb91b9a9186',
          'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
      };
    const {data :{data}} = await axios.get(URL, options);

    return data;
}