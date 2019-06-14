import * as ActionTypes from './actionType';

const defaultState = {
  count: localStorage.goodsArr ? localStorage.goodsArr.length : 0,
  isClick: false
}

export default (state = defaultState, action) => {
  if(action.type === ActionTypes.ADD_GOODS){
    const newState = Object.assign({}, state);
    newState.count++;
    return newState;
  }

  if(action.type === ActionTypes.CLICK_BUTTON){
    const newState = Object.assign({}, state);
    newState.isClick = !newState.isClick;
    return newState;
  }

  return state;
}