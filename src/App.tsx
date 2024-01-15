import './App.css'
import { ContextProvider } from './context/Context'
import ExpenseBalance from './components/expenseBalance/expenseBalance'
import { Graphics } from './components/graphic/graphic'


function App() {
  
  return (
    <ContextProvider>
      <ExpenseBalance/>
      <Graphics/>      
    </ContextProvider>
  )
}

export default App
