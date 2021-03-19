import { connect } from 'react-redux';
import { func } from '../../redux/reducerAllTasks/actions';
import { useEffect } from 'react';
import { Task } from './Task/Task'
import './taskList.css'

export const TaskList = connect(mapStateToProps, mapDispatchToProps)(_TaskList);

function mapStateToProps(state) {
    return (
        { tasks: state.allTasksReducer }
    )
};

function mapDispatchToProps(dispatch) {
    return {
        fetchTasks: function () {
            dispatch(func());
        }
    }
}

function _TaskList({ tasks, fetchTasks }) {

    useEffect(() => {
        fetchTasks();
    }, []);

    console.log(tasks)
    return (
            <div>
                <table className='main_table'>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Статус</th>
                        <th>Исполнитель</th>
                    </tr>
                    {tasks.map(task => (
                        <Task key={task.id} id={task.id} name={task.name} executor={task.executorName} status={task.statusName} />
                    ))}
                </table>
            </div>
    )
}



// $ git push -u origin main