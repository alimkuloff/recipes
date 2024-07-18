import { combineReducers } from 'redux';

const initialRecipesState = {
  recipes: [],
  selectedMeals: [],
};

const recipesReducer = (state = initialRecipesState, action) => {
  switch (action.type) {
    case 'SET_RECIPES':
      return {
        ...state,
        recipes: action.payload,
      };
    case 'ADD_SELECTED_MEAL':
      return {
        ...state,
        selectedMeals: [...state.selectedMeals, action.payload],
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

export default rootReducer;
