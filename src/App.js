import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './PagesMenu/Dashboard'
import Notifications from './PagesMenu/Notifications'
import Reports from './PagesMenu/Reports'
import Users from './PagesMenu/Users'
import Logout from './PagesMenu/Logout'
import CreateAccount from './PagesMenu/CreateAccount'
import UserEmployee from './SubPagesMenu/UserEmployee'
import UserStudents from './SubPagesMenu/UserStudents'
import UserVisitor from './SubPagesMenu/UserVisitor'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/users' element={<Users />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/useremployee' element={<UserEmployee />} />  
          <Route path='/userstudents' element={<UserStudents />} />  
          <Route path='/uservisitor' element={<UserVisitor />} />                      
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
