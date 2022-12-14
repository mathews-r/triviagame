import { LOGIN, QUESTIONS, SCORE, CLEAR } from '../actions';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  questions: [],
  firstLogin: true,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.email,
    };
  case QUESTIONS:
    return {
      ...state,
      questions: action.payload,
    };
  case SCORE:
    return {
      ...state,
      score: Number(state.score) + Number(action.payload),
      assertions: Number(state.assertions) + 1,
    };
  case CLEAR:
    return {
      ...state,
      assertions: 0,
      score: 0,
      firstLogin: false,
    };
  default:
    return state;
  }
};

export default player;
