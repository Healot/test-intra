export function AddTaskState(state = 'idle', action) {
    if (action.type === 'ADD_TASK_START') {
        return 'loading_start';
    }
    if (action.type === 'ADD_TASK_SUCCESS_FINISH') {
        return 'loading_finish';
    }
    if (action.type === 'ADD_TASK_FAILED_FINISH') {
        return 'loading_failed_finish';
    }
    return state;
}

