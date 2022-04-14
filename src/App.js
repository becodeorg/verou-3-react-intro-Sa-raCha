import Header from "./components/Header";
import List from "./components/List";
import { TodolistProvider } from "./contexts/todolist";

function App() {
  return (
    <TodolistProvider>
      <div>
        <Header/>
        <List/>
      </div>
    </TodolistProvider>
  );
}

export default App;
