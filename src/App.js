import logo from './logo.svg';
import './App.css';
// import Clock from '.'

function App() {
  return (
    <div>
      <Clock/>
    </div>
  );
}

function Clock() {
  return (
    <div>
      <h1>hello world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}



export default App;
