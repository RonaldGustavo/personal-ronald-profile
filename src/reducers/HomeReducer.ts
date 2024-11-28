import { TEST } from '../constants';

const INITIAL_STATE = {
  fileName: 'gege',
};

const HomeReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
        fileName: action.payload,
      };

    default:
      return state;
  }
};

export default HomeReducer;
