import './App.css'
import { Counter } from './components/Counter'
import { TodoList } from './components/TodoList'
import { Profile } from './components/Profile'
import { ShoppingList } from './components/ShoppingList'

function App() {

  return (
    <>
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
    </>
  )
}

export default App
