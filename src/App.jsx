import "./App.css";
import Credential from "./components/Sections/Credential/Credential";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import Products from "./components/Sections/Products/Products";
import Stat from "./components/Sections/Stat/Stat";
import Subscription from "./components/Sections/Subscription/Subscription";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Stat />
        <Products />
        <Credential />
        <Subscription />
      </main>
    </>
  );
}

export default App;
