import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Featured from "./components/home/Featured";
import Collections from "./components/home/Collections";
import WhyChoose from "./components/home/WhyChoose";
import Footer from "./components/home/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Collections />
      <WhyChoose />
      <Footer />
    </>
  );
}

export default App;