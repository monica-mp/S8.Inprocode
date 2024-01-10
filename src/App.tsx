import './App.css'
import { ContextProvider } from './context/Context'

function App() {
  
  return (
    <ContextProvider>
      <div>Hola</div>
    </ContextProvider>
  )
}

export default App
