import Navbar from "./components/Navbar.jsx";
import Product from "./components/Product.jsx";


function App() {


  return (

  <div>
    <div>
      <Navbar/>
    </div>

    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Counter App</h1>
      

      <div className="grid grid-cols-3 gap-3">
        <Product
        name="Iphone 12"
        
        description="Iphone 12 is a best phone in the world"
        price={1000}
      />
      <Product
        name="Iphone 13"
        description="Iphone 13 is a smart phone"
        price={2200}
      />
      <Product
        name="Iphone 14"
        description="Iphone 14 is a smart phone"
        price={4000}
      />
      <Product
        name="Iphone 15"
        description="Iphone 15 is a smart phone"
        price={6000}
      />
      <Product
        name="Iphone 16"
        description="Iphone 16 is a smart phone"
        price={9000}
      />
      <Product
        name="Iphone 17"
        description="Iphone 17 is a smart phone"
        price={30000}
      />
      </div>
    </div>
  </div>

  );
}

export default App;