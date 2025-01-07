import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Home from './components/Home.jsx';
import BrowseBooks from './components/BrowseBooks.jsx';
import AddBook from './components/AddBook.jsx';
import CategoryView from './components/CategoryView.jsx';
import BookInfo from './components/BookInfo.jsx';
import Error from './components/Eror.jsx';
import {createBrowserRouter,RouterProvider} from "react-router-dom";


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/browsebooks",
        element:<BrowseBooks/>
      },
      {
        path:"/addbooks",
        element:<AddBook/>
      },
      {
        path:"/books/:category",
        element:<CategoryView/>
      },
      {
        path:"/book/:id",
        element:<BookInfo/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
