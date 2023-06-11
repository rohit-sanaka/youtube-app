import { Provider } from 'react-redux'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'

function App() {
  return (
    <Provider store={store}>
      <div className="font-[Roboto] sm:text-xs md:text-base lg:text-base">
        <Header />
        <Body />
      </div>
    </Provider>
  )
}

export default App
