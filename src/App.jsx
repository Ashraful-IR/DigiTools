import { Suspense } from "react";
import "./App.css";
import Credential from "./components/Sections/Credential/Credential";
import Explore from "./components/Sections/Explore/Explore";
import Footer from "./components/Sections/Footer/Footer";
import Hero from "./components/Sections/Hero/Hero";
import Navbar from "./components/Sections/Navbar/Navbar";
import Products from "./components/Sections/Products/Products";
import Stat from "./components/Sections/Stat/Stat";
import Subscription from "./components/Sections/Subscription/Subscription";
import { Bounce, ToastContainer } from "react-toastify";

const productDetails = async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
};

function App() {

  const products = productDetails();
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Stat />
        <Suspense fallback={<div>Loading Products...</div>}>
          <Products products={products} />
        </Suspense>
        <Credential />
        <Subscription />
        <Explore />
      </main>
      <footer>
        <Footer />
      </footer>

      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
transition={Bounce}
/>
    </>

    
  );
}

export default App;
