const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <button className="bg-white text-blue-600 px-4 py-1 rounded">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
