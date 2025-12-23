import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./layout";
import Home from './component/home/home'
import About from './component/about/about'
import Contact from './component/contact/contact'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Github, { githubInfoLoader } from './component/github/github';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
       {
        path: '',
        element: <Home/>
       },
       {
        path: 'about',
        element: <About/>
       },
       {
        path: 'contact',
        element: <Contact/>
       },
       { 
        path: 'github',
        element: <Github/>,
        loader: githubInfoLoader

       }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
