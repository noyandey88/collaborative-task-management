import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';

export default function Main() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
