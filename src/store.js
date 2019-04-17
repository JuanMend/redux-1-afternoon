import { createStore } from 'redux';

const initialState = {
	name: '',
	category: '',
	authorFirst: '',
	authorLast: '',
	ingredients: [],
	instructions: [],
	recipes: []
};

export const UPDATE_RECIPE_NAME = 'UPDATE_RECIPE_NAME';
export const UPDATE_RECIPE_CATEGORY = 'UPDATE_RECIPE_CATEGORY';
export const UPDATE_FNAME = 'UPDATE_FNAME';
export const UPDATE_LNAME = 'UPDATE_LNAME';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const ADD_INSTRUCTIONS = 'ADD_INSTRUCTIONS';
export const CREATE_RECIPES = 'CREATE_RECIPES';

function reducer(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case UPDATE_RECIPE_NAME:
			return { ...state, name: payload };

		case UPDATE_RECIPE_CATEGORY:
			return { ...state, category: payload };

		case UPDATE_FNAME:
			return { ...state, authorFirst: payload };

		case UPDATE_LNAME:
			return { ...state, authorLast: payload };

		case UPDATE_INGREDIENTS:
			const newIngredients = [ ...state.ingredients, payload ];
			return { ...state, ingredients: newIngredients };

		case ADD_INSTRUCTIONS:
			const newInstructions = [ ...state.instructions, payload ];
			return { ...state, instructions: newInstructions };

		case CREATE_RECIPES:
			const { name, category, authorFirst, authorLast, ingredients, instructions } = state;
			const recipe = {
				name,
				category,
				authorFirst,
				authorLast,
				ingredients,
				instructions
			};
			const newRecipes = [ ...state.recipes, recipe ];
			return { ...state, recipes: newRecipes };
		default:
			return state;
	}
}

export default createStore(reducer);
