// /components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">Earth Harmony Resort</Link>
      </div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/rooms">Rooms</Link>
        <Link href="/volunteer">Volunteer</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
