import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <img src="public/vite.svg" alt="" />
            MiniShop
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#" className="hover:text-blue-500">Home</a>
            <a href="#" className="hover:text-blue-500">Products</a>
            <a href="#" className="hover:text-blue-500">Cart</a>
            <a href="#" className="hover:text-blue-500">Contact</a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4">
          <a href="#" className="block py-2">Home</a>
          <a href="#" className="block py-2">Products</a>
          <a href="#" className="block py-2">Cart</a>
          <a href="#" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
