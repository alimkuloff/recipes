export const setRecipes = (recipes) => ({
    type: 'SET_RECIPES',
    payload: recipes,
  });
  
  export const addSelectedMeal = (meal) => ({
    type: 'ADD_SELECTED_MEAL',
    payload: meal,
  });
  