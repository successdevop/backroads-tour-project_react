import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Features />
      <Contact />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
