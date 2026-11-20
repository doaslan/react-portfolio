
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useApp } from "./context/useApp";

export default function App() {
  const { darkMode } = useApp();

  return (
    <div className="min-h-screen bg-white dark:bg-[#252128] text-[#1F2937] dark:text-white transition-colors duration-300 font-sans">
      <Header />

      <main>
        <Hero />
        <Skills />
        <Profile />
        <Projects />
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}
