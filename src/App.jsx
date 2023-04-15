
import Home from './page/Home'
import Defaultlayout from './layout/Defaultlayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Defaultlayout/>,
      children: [
        {
          path: '',
          element: <Home/>
        }
      ]
    },
  ])
  return (
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}

export default App
