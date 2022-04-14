import Header from "./components/Header";
import List from "./components/List";
import Status from "./components/Status";
import { TodolistProvider } from "./contexts/todolist";

function App() {
  return (
    <TodolistProvider>
      <div>
        <Header/>
        <List/>
        <Status/>
      </div>
    </TodolistProvider>
  );
}

export default App;
