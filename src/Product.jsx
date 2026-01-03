import { useState } from 'react';
import ItemDescription from './ItemDescription';

function Product({ name, description, price, image }) {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="bg-neutral-50 max-w-sm p-6 border border-neutral-200 rounded-lg shadow-xs hover:shadow-sm transition-shadow">
            <div className="w-full h-44 rounded-lg overflow-hidden mb-6">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>
            <ItemDescription name={name} description={description} />
            <p className="text-2xl font-bold text-emerald-600 mb-6">${price}</p>
            <div className="flex items-center gap-4 p-3 bg-neutral-100 rounded-lg border border-neutral-200">
                <span className="text-sm text-neutral-600 font-medium">Quantité</span>
                <span className="text-lg font-semibold text-neutral-900 min-w-8 text-center">{count}</span>
                <div className="flex gap-2 ml-auto">
                    <button
                        onClick={decrement}
                        className="w-9 h-9 flex items-center justify-center bg-white border border-neutral-300 rounded-md text-neutral-600 text-xl font-medium cursor-pointer shadow-xs hover:bg-red-50 hover:border-red-500 hover:text-red-600 active:scale-95 transition-all"
                    >
                        −
                    </button>
                    <button
                        onClick={increment}
                        className="w-9 h-9 flex items-center justify-center bg-white border border-neutral-300 rounded-md text-neutral-600 text-xl font-medium cursor-pointer shadow-xs hover:bg-emerald-50 hover:border-emerald-500 hover:text-emerald-600 active:scale-95 transition-all"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
