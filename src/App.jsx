import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import { useState } from "react";
import { ThemeContextProvider } from "./context/Theme";
import { useEffect } from "react";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: 'about',
        element: <About/>
      },
    ],
  },
]);

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
      <RouterProvider router={router} />
    </ThemeContextProvider>
  );
}
