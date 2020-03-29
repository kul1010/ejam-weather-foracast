import OAuth from 'oauth';
import {keys} from '../config/keys'

// console.log('oooo',yahooAppId,yahooConsumerKey,yahooConsumerSecret)
const api_header = {
  "X-Yahoo-App-Id": keys.yahooAppId
};
const api_request = new OAuth.OAuth(
  null,
  null,
  keys.yahooConsumerKey,
  keys.yahooConsumerSecret,
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  api_header
);
// console.log('ggggj',api_request)
/* 
  src/actions/cityAction.js
*/
export const cityAction = (id) => dispatch => { 
  dispatch({
    type: 'SET_CITY',
    payload: id
  })
}
export const fetchApiDataAction = (cityId) => async dispatch => {
  // console.log(cityId,'ggg');
   await api_request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${cityId}&format=json`,
    null,
    null,
     (err, data, result)=> { 
       let jsonData = JSON.parse(data);
       if(!err){ //console.log('hhhh',typeof(jsonData));
        dispatch({
        type: 'FETCH_API_DATA',
        payload:{apiData:jsonData,isOk:true,errors:null}        
      
    })}else{
    // console.log('error',err);
    dispatch({
      type: 'FETCH_API_DATA',
      payload:{apiData:{},isOk:false,errors:err}        
    
  })
    
  }
  });
 
}

