import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home,AddUser,UsersList,AddAdmin,AdminsList } from './pages/index.js'
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

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
