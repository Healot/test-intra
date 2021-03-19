import { connect } from 'react-redux';
import uuid from 'react-uuid'

export const ModalForm = connect(null, mapDispatchToProps)(_ModalForm);

function mapDispatchToProps(dispatch) {
    return {
        addTask: function (task) {
            dispatch({
                type: "ADD_TASK_SUCCESS_FINISH",
                task,
            });
        },
    };
}

function _ModalForm(props) {
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = { statusName: 'Открыта', id: uuid(), ...Object.fromEntries(formData.entries()) };
        props.addTask(data);
        for (let i = 0; i < e.target.childElementCount; i++) {
            e.target.elements[i].value = '';
        }
    }

    return (
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
                Название задачи: <input type="text" name='name' />
                Описание :<input type="text" name='description' />
                Ваше имя: <input type="text" name='executorName' />
                <button type="submit">submit</button>
            </form>
        </div>
    )
}