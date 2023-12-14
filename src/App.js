//shortcut- rafce//

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/admin/AdminDashboard';

//for showing toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        {/*Homepage Route*/}
        <Route path='/home' element={<Homepage />} />
        {/*Create Register Route*/}
        <Route path='/register' element={<Register />} />
        {/*Login Route*/}
        <Route path='/login' element={<Login />} />

        {/*Admin routes*/}
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}


export default App;