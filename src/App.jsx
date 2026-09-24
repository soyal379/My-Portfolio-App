import Home from "./pages/Home";
import { useState } from "react";
import { ThemeContextProvider } from "./context/Theme";
import { useEffect } from "react";
import About from "./pages/About";
import Header from "./pages/Header";
import Journey from "./pages/Journey";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";



export default function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  };

  useEffect(() => {
    const htmlEl = document.documentElement;
    htmlEl.classList.remove("light", "dark");
    htmlEl.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeContextProvider value={{ themeMode, toggleTheme }}>
      <div className="min-h-screen dark:bg-dark-bg light:bg-light-bg dark:text-dark-text light:text-light-text">
        <Header />
        <main>
          <Home id="home" />
          <About id="about" />
          <Journey id="journey" />
          <Skills id="skills" />
          <Projects id="projects" />
          <Contact id="contact" />
          <Footer />
        </main>
      </div>
    </ThemeContextProvider>
  );
}
