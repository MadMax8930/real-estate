import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
   const { data } = await axios.get(url, {
      headers: {
         'x-rapidapi-key': 'e63c9011cdmshb275bdd29b3dce1p1c9099jsn2a548a1316f1',
         'x-rapidapi-host': 'bayut.p.rapidapi.com'
      }
   });
   
   return data;
};