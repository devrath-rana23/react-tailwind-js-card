import About from "./components/about";
import Card from "./components/card";
import Footer from "./components/footer";
import Skills from "./components/skills";

function App() {
  return (
    <div className="py-10 bg-gray-100 sm:px-5 min-h-screen">
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
