// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

;
export const GET_CHARACTERS = 'GET_CHARACTERS';


export function getCharacters() {
  return (dispatch) => {
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data)
        dispatch({ type: GET_CHARACTERS, payload: res.data })
      })
      .catch(error => {
        console.log(error.message)
      });
  }
}