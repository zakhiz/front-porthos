import { ToastContainer } from 'react-toastify';
import AppRoutes from './routes/app.routes';
import './styles/App.css';
import "react-toastify/dist/ReactToastify.css"; 
function App() {

  return (
    <>
          <AppRoutes/>
          <ToastContainer />
    </>
  )
}

export default App