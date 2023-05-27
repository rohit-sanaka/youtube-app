/**
 * Header
 *  ---
 *  - Hamburger
 *  - Logo
 *  ---
 *  - SearchBar
 *  - SearchIcon
 *  ---
 *  - Profile
 *
 * Body
 *
 *  - Sidebar
 *    - MenuItems
 *
 *  - MainContainer
 *    - ButtonsList
 *    - VideoContainer
 *       - VideoCard
 *
 *
 *
 *
 */

import { Provider } from 'react-redux'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: 'watch',
          element: <WatchPage />,
        },
      ],
    },
  ])

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}>
        <div className="font-[Roboto]">
          <Header />
        </div>
      </RouterProvider>
    </Provider>
  )
}

export default App
