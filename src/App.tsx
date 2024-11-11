import React, { useState } from 'react';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { products } from './data/products';
import { CartItem, Product } from './types';
import { Store } from 'lucide-react';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleProductClick = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    alert('Order placed successfully!');
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Store className="h-6 w-6 text-green-600" />
            <h1 className="text-xl font-semibold text-gray-800">Modern POS</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProductGrid
              products={products}
              onProductClick={handleProductClick}
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <Cart
              items={cartItems}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;