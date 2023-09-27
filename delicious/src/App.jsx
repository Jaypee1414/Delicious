import './App.css';
import Pages from './pages/Pages';
import Category from './components/Category' 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "./components/Search"
import Logo from "./pages/Logo"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Cusine from "./pages/Cusine"
import Searched from './pages/Searched';

function App() {
  return (
    <div className="App">
      <Router>
        <Logo/>
        <Pages/>
      </Router>
    </div>
  );
}

export default App;
