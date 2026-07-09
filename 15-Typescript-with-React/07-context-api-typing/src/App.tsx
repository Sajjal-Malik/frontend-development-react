import CounterComponent from "./CounterComponent";
import { MyProvider } from "./context/MyProvider";

const App = () => {
  return (
    <MyProvider>
      <CounterComponent />
    </MyProvider>
  )
}

export default App;