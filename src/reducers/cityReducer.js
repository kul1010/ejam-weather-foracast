/* 
  src/reducers/cityReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'CITY_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
