
// Creacion del type para las acciones del Budget
export type BudgetActions =
    { type: 'add-budget', payload: {budget: number} }

// Creacion del type del State para el Budget     
export type BudgetState = {
    budget: number;
}

// Creación del estado inicial
export const initialState : BudgetState = {
    budget: 0
}

// Creacion del reducer para el Budget
export const budgetReducer = (
        state: BudgetState = initialState,
        actions: BudgetActions
    ) => {
    if(actions.type === 'add-budget') {
        return {
            ...state,
            budget: actions.payload.budget
        }
    }
    return state;

}