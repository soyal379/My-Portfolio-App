import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-inter transition-colors duration-400 ease-in-out dark:bg-dark-bg dark:text-dark-text light:bg-light-bg light:text-light-text">
      <div className=""></div>
      <Header/>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
