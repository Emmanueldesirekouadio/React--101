import React from 'react'
import { useState } from 'react'

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const addItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        setItems([...items, { name, quantity }]);
        e.target.name.value = '';
        e.target.quantity.value = '';
    }
  return (
    <form onSubmit={addItem} className='flex flex-col items-center justify-center gap-4'>
        <input className='border-2 border-gray-300 rounded-md p-2' type="text" name="name" id="name" placeholder="Ajouter un item" />
        <input className='border-2 border-gray-300 rounded-md p-2' type="number" name="quantity" id="quantity" placeholder="Ajouter une quantité" />
        <button className='border-2 border-gray-300 rounded-md p-2' type="submit">Ajouter</button>
        <h2 className='text-2xl'> Liste des articles: </h2>    

        {items.length > 0 && (
             <ul>
                {items.map((item, index) => (
                    <li key={index} className='text-2xl'>{item.name} - {item.quantity}</li>
                ))}
             </ul>
        )}
    </form>
  )
}

export default ShoppingList