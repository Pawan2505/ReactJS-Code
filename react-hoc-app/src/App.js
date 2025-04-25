import logo from "./logo.svg";
import "./App.css";
import CounterClick from "./components/CounterClick";
import CounterLogic from "./components/CounterLogic";

const EnhancedClickCounter = CounterLogic(CounterClick);

function App() {
  return (
    <div className="App">
      <EnhancedClickCounter />
    </div>
  );
}

export default App;
