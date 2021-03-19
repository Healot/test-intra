import { api } from '../../api'

function createNewTask(tasks) {
    return {
        type: 'ADD_NEW_TASKS',
        tasks,
    }
}




export function func() {
    return function (dispatch, getState) {
        api.getTasks().then(data => dispatch(createNewTask(data.value)))
    }
}