import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-12 w-full max-w-[1280px] mx-auto px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
