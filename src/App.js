import { store } from './redux/thunk';
import { Provider } from 'react-redux';

import { TaskList } from './components/TaskList/TaskList';
import { Modal } from './components/Modal/Modal'
import {ModalForm} from './components/Modal/ModalForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TaskList />
        <Modal>
          <ModalForm />
        </Modal>
      </div>
    </Provider>
  );
}

export default App;
