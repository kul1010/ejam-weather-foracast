/* 
  src/reducers/cityReducer.js
*/

const iState={
  id:'',
  isOk:false,
  errors:null,
  weatherApiData:{}
}
export default (state = iState, action) => {
  switch (action.type) {
    case 'SET_CITY':
      return {
        ...state,
        id: action.payload
      }
    case 'GET_CITY':
      return { 
        ...state,
        id: state.id
      }
    case 'FETCH_API_DATA':
      return { 
        ...state,
        weatherApiData:action.payload
        
      }
    default:
      return state
  }
}
