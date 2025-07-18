'use client';

import { useState } from 'react';
import { getRestaurantById, getMenuItemsByRestaurant } from '@/data/restaurants';

interface OrderModalProps {
  restaurantId: string;
  onClose: () => void;
}

export default function OrderModal({ restaurantId, onClose }: OrderModalProps) {
  const restaurant = getRestaurantById(restaurantId);
  const menuItems = getMenuItemsByRestaurant(restaurantId);
  const [orderItems, setOrderItems] = useState<{ [itemId: string]: number }>({});
  const [specialInstructions, setSpecialInstructions] = useState('');

  if (!restaurant) {
    return null;
  }

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      const newOrderItems = { ...orderItems };
      delete newOrderItems[itemId];
      setOrderItems(newOrderItems);
    } else {
      setOrderItems({ ...orderItems, [itemId]: quantity });
    }
  };

  const getTotalAmount = () => {
    return Object.entries(orderItems).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find(item => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const getOrderItemsCount = () => {
    return Object.values(orderItems).reduce((total, quantity) => total + quantity, 0);
  };

  const handlePlaceOrder = () => {
    // TODO: Implement order placement logic with Firebase
    console.log('Order placed:', {
      restaurantId,
      items: orderItems,
      specialInstructions,
      totalAmount: getTotalAmount()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden fun-card">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{restaurant.image}</div>
              <div>
                <h2 className="text-2xl font-bold">{restaurant.name}</h2>
                <p className="text-gray-600">{restaurant.location}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg fun-button"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-6 overflow-y-auto max-h-96">
          <h3 className="text-lg font-semibold mb-4">Menu Items</h3>
          
          {menuItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-3xl mb-2">📝</div>
              <p className="text-gray-500">Menu items coming soon!</p>
              <p className="text-gray-400 text-sm">This restaurant is still updating their menu.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {menuItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      {item.spiceLevel && (
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500 mr-1">Spice:</span>
                          <span className="text-red-500">
                            {'🌶️'.repeat(Math.min(item.spiceLevel, 5))}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="text-lg font-semibold text-primary-600">
                      ${item.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, (orderItems[item.id] || 0) - 1)}
                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center fun-button"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-medium">
                        {orderItems[item.id] || 0}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, (orderItems[item.id] || 0) + 1)}
                        className="w-8 h-8 rounded-full bg-primary-500 text-white hover:bg-primary-600 flex items-center justify-center fun-button"
                      >
                        +
                      </button>
                    </div>
                    {!item.isAvailable && (
                      <span className="text-red-500 text-sm">Unavailable</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Special Instructions */}
        <div className="px-6 pb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Special Instructions (Optional)
          </label>
          <textarea
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Any special requests or dietary restrictions..."
            rows={3}
          />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg font-semibold">
              Total: ${getTotalAmount().toFixed(2)}
            </div>
            <div className="text-sm text-gray-600">
              {getOrderItemsCount()} item{getOrderItemsCount() !== 1 ? 's' : ''}
            </div>
          </div>
          
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 fun-button"
            >
              Cancel
            </button>
            <button
              onClick={handlePlaceOrder}
              disabled={getOrderItemsCount() === 0}
              className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 fun-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Place Order 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 