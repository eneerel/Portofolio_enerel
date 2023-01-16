import "./App.css";
import {NavbarMenu} from "./components/navbar";
import About from "./pages/about";
import Hero from "./pages/hero";


function App() {
  return (
    <div>
      <NavbarMenu />
      <Hero />
      <About />
    </div>
  );
}

export default App;
