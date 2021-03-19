import {api} from '../../api'
function addTaskStart() {
    return {
        type: "ADD_TASK_START",
    }
}
function addtaskSuccessFinish(task) {
    return {
        type: "ADD_TASK_SUCCESS_FINISH",
        task,
    }
}
function addtaskFailedFinish() {
    return {
        type: "ADD_TASK_FAILED_FINISH",
    }
}

export function addTask(task) {
    return function (dispatch) {
        dispatch(addTaskStart());
        api.createNewTask(task).then(
            (id) => dispatch(addtaskSuccessFinish({...task, id})),
            () => dispatch(addtaskFailedFinish())
        );
    }
}
