import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home,AddUser,UsersList,AddAdmin,AdminsList, AddStudent, AddFaculty, StudentsList, FacultiesList, AddRole, RolesList, AddDepartment } from './pages/index.js'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/adduser",
        element:<AddUser />
      },
      {
        path:"/userslist",
        element:<UsersList />
      },
      {
        path:"/addadmin",
        element:<AddAdmin />
      },
      {
        path:"/adminslist",
        element:<AdminsList />
      },
      {
        path:"/addstudent",
        element:<AddStudent />
      },
      {
        path:"/studentslist",
        element:<StudentsList />
      },
      {
        path:"/addfaculty",
        element:<AddFaculty />
      },
      {
        path:"/facultiesList",
        element:<FacultiesList />
      },
      {
        path:"/addrole",
        element:<AddRole />
      },
      {
        path:"/roleslist",
        element:<RolesList />
      },
      {
        path:"/adddepartment",
        element:<AddDepartment />
      },
      

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
