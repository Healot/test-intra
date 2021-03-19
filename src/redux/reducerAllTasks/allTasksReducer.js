export function allTasksReducer(state = [], action) {
    if (action.type === "ADD_NEW_TASKS") {
        return action.tasks;
    }
    if (action.type === "ADD_TASK_SUCCESS_FINISH") {
        return [...state, action.task]
    }
   
    return state;
}

