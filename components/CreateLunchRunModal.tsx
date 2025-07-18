'use client';

import { useState } from 'react';
import { restaurants } from '@/data/restaurants';
import { useAuth } from '@/contexts/AuthContext';

interface CreateLunchRunModalProps {
  onClose: () => void;
}

export default function CreateLunchRunModal({ onClose }: CreateLunchRunModalProps) {
  const { user } = useAuth();
  const [selectedRestaurant, setSelectedRestaurant] = useState('');
  const [maxOrders, setMaxOrders] = useState(10);
  const [deadline, setDeadline] = useState('');
  const [loading, setLoading] = useState(false);

  // Set default deadline to 1 hour from now
  const getDefaultDeadline = () => {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    return now.toISOString().slice(0, 16); // Format for datetime-local input
  };

  const selectedRestaurantData = restaurants.find(r => r.id === selectedRestaurant);

  const handleCreateRun = async () => {
    if (!selectedRestaurant || !deadline || !user) return;

    setLoading(true);
    try {
      // TODO: Implement lunch run creation logic with Firebase
      console.log('Creating lunch run:', {
        lunchmanId: user.id,
        lunchmanName: user.name,
        restaurantId: selectedRestaurant,
        restaurantName: selectedRestaurantData?.name,
        maxOrders,
        deadline: new Date(deadline),
      });
      
      // For now, just close the modal
      onClose();
    } catch (error) {
      console.error('Failed to create lunch run:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden fun-card">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🚀</div>
              <div>
                <h2 className="text-2xl font-bold">Start a Lunch Run</h2>
                <p className="text-gray-600">Collect orders from your team!</p>
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

        {/* Form */}
        <div className="p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Restaurant Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Choose Restaurant
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-60 overflow-y-auto">
                {restaurants.filter(r => r.isActive).map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedRestaurant === restaurant.id
                        ? 'border-primary-400 bg-primary-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedRestaurant(restaurant.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{restaurant.image}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold">{restaurant.name}</h4>
                        <p className="text-gray-600 text-sm">{restaurant.location}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-yellow-400 text-sm">⭐</span>
                          <span className="text-sm text-gray-600 ml-1">{restaurant.rating}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-600">{restaurant.deliveryTime} min</span>
                        </div>
                      </div>
                      {selectedRestaurant === restaurant.id && (
                        <div className="w-4 h-4 rounded-full bg-primary-400 border-2 border-primary-400">
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Deadline
                </label>
                <input
                  type="datetime-local"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  min={new Date().toISOString().slice(0, 16)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Max Orders
                </label>
                <select
                  value={maxOrders}
                  onChange={(e) => setMaxOrders(parseInt(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  {[5, 10, 15, 20, 25, 30].map((num) => (
                    <option key={num} value={num}>
                      {num} orders
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preview */}
            {selectedRestaurantData && (
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium mb-2">Lunch Run Preview</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Restaurant:</strong> {selectedRestaurantData.name}</p>
                  <p><strong>Location:</strong> {selectedRestaurantData.location}</p>
                  <p><strong>Estimated Pickup Time:</strong> {selectedRestaurantData.deliveryTime} minutes</p>
                  <p><strong>Max Orders:</strong> {maxOrders} people</p>
                  <p><strong>Order Deadline:</strong> {deadline ? new Date(deadline).toLocaleString() : 'Not set'}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 fun-button"
            >
              Cancel
            </button>
            <button
              onClick={handleCreateRun}
              disabled={!selectedRestaurant || !deadline || loading}
              className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 fun-button disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Creating...
                </span>
              ) : (
                'Start Lunch Run 🚀'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 