import './App.css'
import { ContextProvider } from './context/Context'
import ExpenseBalance from './components/expenseBalance/expenseBalance'

function App() {
  
  return (
    <ContextProvider>
      <ExpenseBalance/>
    </ContextProvider>
  )
}

export default App
