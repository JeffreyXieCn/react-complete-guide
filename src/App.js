import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem"

function App() {
  return (
    <div>
      <div>
        <h2>Let's get started!</h2>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
        <ExpenseItem></ExpenseItem>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
