import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './styles/index.css';

//screens
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Stock from './pages/Stock';
import AdminDashboard from './pages/AdminDashboard';
import Employee from './pages/Employee';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/stock" element={<Stock />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/employee" element={<Employee />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
