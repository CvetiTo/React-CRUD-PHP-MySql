import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import CreateUser from "./components/CreateUser.js";
import EditUser from "./components/EditUser.js";
import ListUser from './components/ListUser'

function App() {
  return (
    <div className='container'>
      <div className='App'>
        <h1 className='page-header text-center'> React CRUD with PHP MySQL</h1>

        <BrowserRouter>
          <Link to="user/create" className="btn btn-success" >Add new user</Link>

          <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
