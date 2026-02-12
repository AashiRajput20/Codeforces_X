import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, toggleTheme, theme }) {
  return (
    <div className="drawer">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col min-h-screen">

        <Navbar toggleTheme={toggleTheme} theme={theme} />

        {/* Add breathing space */}
        <main className="flex-1 px-6 py-10 lg:px-16 lg:py-14 max-w-7xl mx-auto">
          {children}
        </main>

        <Footer />
      </div>

      <Sidebar />
    </div>
  );
}
