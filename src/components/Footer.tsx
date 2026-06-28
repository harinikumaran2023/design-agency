export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} PixelCraft Design Agency. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}