import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="py-6 px-10 flex justify-between items-center bg-white fixed w-full z-20 shadow">
      <Link to="/" className="text-2xl font-bold text-accent">Elevate Realty</Link>
      <ul className="flex space-x-8 text-lg">
        <li>
          <Link to="/" className="hover:text-accent transition">Home</Link>
        </li>
        <li>
          <Link to="/properties" className="hover:text-accent transition">Properties</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-accent transition">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-accent transition">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
