import logo from './logo.svg';
import fullLogo from './full-logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We are coming soon! Open source contributions to the site is always welcomed.
        </p>
        <div><img src={fullLogo} className="test" alt="logo" /></div>
       
      </header>
      
    </div>

   
  );
}

export default App;
