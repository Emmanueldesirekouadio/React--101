import ItemDescription from '../ItemDescription';
import { useState } from 'react';


const Product = (props) => {
    const [count, setCount] = useState(0);

    const increment = () =>  setCount(count + 1);

    const decrement = () => {
        if (count > 0) setCount(count - 1);
    };

  return (
    <div className='bg-white p-4 rounded-xl shadow'>
      <ItemDescription name={props.name} description={props.description} price={props.price} />
      <p className="font-bold mt-2 fs-lg text-red-500">Price : ${props.price}</p>
      <h2 className="font-bold mt-2">Count : {count}</h2>
      <div className="flex items-center gap-3 mt-4">
        <button className="px-4 py-1 bg-green-500 text-white rounded" onClick={increment}>+</button>
        <button className="px-4 py-1 bg-red-500 text-white rounded" onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Product;
