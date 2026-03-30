import "./App.css";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import Stat from "./components/Sections/Stat/Stat";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Stat />
      </main>
    </>
  );
}

export default App;
