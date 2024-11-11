import React from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

export function Cart({ items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold text-gray-800">Current Order</h2>
      </div>
      
      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="p-4 border-b flex items-center gap-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-green-600">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Minus size={16} />
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Plus size={16} />
              </button>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="p-1 hover:bg-gray-100 rounded text-red-500"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t mt-auto">
        <div className="flex justify-between mb-4">
          <span className="font-semibold">Total:</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <button
          onClick={onCheckout}
          disabled={items.length === 0}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold
                     hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed
                     transition-colors duration-200"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}