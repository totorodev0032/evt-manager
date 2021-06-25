import { sampleData } from '../../app/api/SampleData';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';

const initialState = {
  events: sampleData,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((evt) => evt.id !== action.payload.id),
          action.payload,
        ],
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((evt) => evt.id !== action.payload)],
      };

    default:
      return state;
  }
}
