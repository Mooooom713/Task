import * as ActionTypes from './actionType';

const defaultState = {
  count: localStorage.goodsArr &&  JSON.parse(localStorage.goodsArr).length ? JSON.parse(localStorage.goodsArr).length : 0,
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
    console.log(newState.count);
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
  console.log(state.count);
  return state;
}