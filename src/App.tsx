import { Provider } from "react-redux"
import "./App.css"
import Index from "./components/Index"
import { store } from "./app/store"

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  )
}

export default App
