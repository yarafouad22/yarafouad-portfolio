import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Layout from './Components/layout/Layout';
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import Projects from './Components/Projects/Projects';

let routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
  { path: '*', element: <div>Page Not Found</div> },
]);

function App() {
  return <RouterProvider router={routers}/>;
}

export default App;

