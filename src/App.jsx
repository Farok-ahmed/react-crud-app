import TaskManager from "./components/TaskManager.jsx";
import InputManager from "./components/InputManager.jsx";
import CrudManager from "./components/CrudManager.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
      <>
          <CrudManager/>
        {/*<TaskManager/>*/}
        {/*  <InputManager/>*/}
          <ToastContainer />
      </>
  )
}

export default App
