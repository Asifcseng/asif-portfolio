import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-right-top bg-black bg-no-repeat bg-[url('/header.svg')]  text-white">
        <span className="bg-[url('/header.svg')]"></span>{" "}
        {/* Push content below fixed navbar */}
        <Home />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
