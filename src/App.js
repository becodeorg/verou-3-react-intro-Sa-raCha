import Header from "./components/Header";
import { TodolistProvider } from "./contexts/todolist";

function App() {
  return (
    <TodolistProvider>
      <div>
        <Header/>
      </div>
    </TodolistProvider>
  );
}

export default App;
