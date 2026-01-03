import Product from './Product';

function App() {

  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 tracking-tight mb-4">My counter app</h1>
        <p className="text-red-600 font-medium px-6 py-3 bg-red-50 border border-red-200 rounded-lg inline-block">
          This is an error message
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <Product
          name='iPhone 12'
          description='iPhone 12 avec écran Super Retina XDR et puce A14 Bionic'
          price={699}
          image='https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop'
        />
        <Product
          name='Samsung Galaxy S23'
          description='Galaxy S23 avec processeur Snapdragon 8 Gen 2 et caméra 50MP'
          price={849}
          image='https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=300&fit=crop'
        />
        <Product
          name='Google Pixel 7'
          description='Pixel 7 avec puce Tensor G2 et appareil photo intelligent'
          price={599}
          image='https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=300&fit=crop'
        />
        <Product
          name='OnePlus 11'
          description='OnePlus 11 avec Snapdragon 8 Gen 2 et charge rapide 100W'
          price={749}
          image='https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop'
        />
        <Product
          name='Realme 10'
          description='Realme 10 avec écran AMOLED 90Hz et batterie 5000mAh'
          price={249}
          image='https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&h=300&fit=crop'
        />
        <Product
          name='Oppo Find X6'
          description='Find X6 avec triple caméra Hasselblad et écran 120Hz'
          price={899}
          image='https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=400&h=300&fit=crop'
        />
        <Product
          name='Vivo X90'
          description='Vivo X90 avec optique Zeiss et stabilisation Gimbal'
          price={799}
          image='https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=400&h=300&fit=crop'
        />
        <Product
          name='Nokia G42'
          description='Nokia G42 avec Android One et 3 ans de mises à jour'
          price={199}
          image='https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=400&h=300&fit=crop'
        />
      </div>
    </div>
  )
}

export default App
