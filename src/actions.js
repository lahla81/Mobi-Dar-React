import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_MOBILES_PENDING,
    REQUEST_MOBILES_SUCCESS,
    REQUEST_MOBILES_FAILED
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestMobiles = (dispatch) => {
    dispatch({ type: REQUEST_MOBILES_PENDING })
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://gsmarena-obrisiswox.now.sh/devices/sony-phones-80";
    fetch(proxyurl + url)
      .then(response => response.json())
      .then(data => dispatch({ type: REQUEST_MOBILES_SUCCESS, payload: data.data.items }))
      .catch(error => dispatch({ type: REQUEST_MOBILES_FAILED, payload:error }))
}