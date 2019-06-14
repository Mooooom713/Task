import * as ActionTypes from './actionType';

const defaultState = {
  count: localStorage.goodsArr &&  localStorage.goodsArr.length ? localStorage.goodsArr.length : 0,
  isClick: false,
  sCount: 0,
  mCount: 0,
  lCount: 0
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

  if(action.type === ActionTypes.ADD_S_SIZE){
    const newState = Object.assign({}, state);
    newState.sCount++;
    return newState;
  }

  if(action.type === ActionTypes.ADD_M_SIZE){
    const newState = Object.assign({}, state);
    newState.mCount++;
    return newState;
  }

  if(action.type === ActionTypes.ADD_L_SIZE){
    const newState = Object.assign({}, state);
    newState.lCount++;
    return newState;
  }

  return state;
}