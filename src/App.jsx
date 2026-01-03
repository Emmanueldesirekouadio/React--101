import React from "react";
import Product from "./Product";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          Nos Produits
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Product
            name="iPhone 12"
            description="A14 Bionic, Super Retina XDR"
            price={1000}
          />
          <Product
            name="iPhone 13"
            description="Mode Cinématique, ProMotion"
            price={2200}
          />
          <Product
            name="iPhone 14"
            description="SOS Satellite, Crash Detection"
            price={4000}
          />
          <Product
            name="iPhone 15"
            description="Dynamic Island, 48MP"
            price={6000}
          />
          <Product
            name="iPhone 16"
            description="Puce A18, Apple Intelligence"
            price={9000}
          />
          <Product
            name="iPhone 17"
            description="Prochaine génération"
            price={30000}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
