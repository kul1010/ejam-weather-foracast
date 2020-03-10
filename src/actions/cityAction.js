/* 
  src/actions/cityAction.js
*/
export const cityAction = () => dispatch => {
  dispatch({
    type: 'CITY_ACTION',
    payload: 'result_of_simple_action'
  })
}

