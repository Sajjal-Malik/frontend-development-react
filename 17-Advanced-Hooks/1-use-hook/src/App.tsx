import FetchTodo from "./components/FetchTodo";
import { Suspense } from "react";

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <FetchTodo />
    </Suspense>
  );
};

export default App;