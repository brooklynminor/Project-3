import NavBar from "./components/Navbar"
import './components/style.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="footer fixed-bottom bg-dark text-center text-white">
        @Project team name
      </div>
    </div>
    
  );
}
export default App;
