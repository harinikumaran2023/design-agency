export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-extrabold text-indigo-600">
          PixelCraft
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li>
            <a href="#hero" className="hover:text-indigo-600 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#services" className="hover:text-indigo-600 transition">
              Services
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-indigo-600 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-indigo-600 transition">
              Contact
            </a>
          </li>
        </ul>

        <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
          Let's Talk
        </button>
      </nav>
    </header>
  );
}