import { UPDATE_COMPANIES } from './actions';

const initialState = {
  companies: undefined,
};

const CrudReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMPANIES:
      return Object.assign({}, state, { companies: action.companies });
    // case CLEAR_LIST:
    //   return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default CrudReducer;