import { Outlet } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";


export default function Layout() {
  return (
    <div className="flex flex-col bg-dark-bg text-dark-text min-h-screen font-inter transition-colors duration-400 ease-in-out">
      <div className=""></div>
      <Header/>
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
