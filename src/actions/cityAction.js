import OAuth from 'oauth';

const api_header = {
  "X-Yahoo-App-Id": "0FCEXQ4a0FCEXQ4a"
};
const api_request = new OAuth.OAuth(
  null,
  null,
  'dj0yJmk9TlJBSWt3WU9seUlqJmQ9WVdrOU1FWkRSVmhSTkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTY0',
  '03565e99b7c8ceb2cb1af041e18f61b3653dfc6a',
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
      
    })}
  else{
    // console.log('error',err);
    dispatch({
      type: 'FETCH_API_DATA',
      payload:{apiData:{},isOk:false,errors:err}        
    
  })
    
  }
  });
 
}

