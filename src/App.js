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
// import MainContainer from './components/MainContainer'
import Header from './components/Header'
import store from './utils/store'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import WatchPage from './components/WatchPage'

function App() {
  return (
    <Provider store={store}>
      <div className="font-[Roboto]">
        <Header />
        <Body />
      </div>
    </Provider>
  )
}

export default App
