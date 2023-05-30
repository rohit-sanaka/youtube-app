import { Provider } from 'react-redux'
import Body from './components/Body'
import Header from './components/Header'
import store from './utils/store'
import useOnline from './utils/useOnline'

function App() {
  const isOnline = useOnline()
  if (!isOnline) {
    alert('No Internet connection! Please check your Internet connection')
  }
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
