'use client';

import { useState } from 'react';
import { restaurants } from '@/data/restaurants';
import RestaurantCard from '@/components/RestaurantCard';
import OrderModal from '@/components/OrderModal';

export default function LuncheeDashboard() {
  const [selectedRestaurant, setSelectedRestaurant] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    restaurant.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center">
        <div className="text-4xl mb-4 animate-bounce">🍽️</div>
        <h1 className="text-3xl font-bold gradient-text font-fun mb-2">
          Time for lunch! 
        </h1>
        <p className="text-gray-600 text-lg">
          Browse restaurants and place your order 🎉
        </p>
      </div>

      {/* Active Lunch Runs */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">🚶‍♂️</span>
          <h2 className="text-xl font-semibold">Active Lunch Runs</h2>
        </div>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex items-center">
            <span className="text-2xl mr-2">⏰</span>
            <div>
              <p className="font-medium text-yellow-800">No active lunch runs right now</p>
              <p className="text-yellow-600 text-sm">
                When someone starts a lunch run, you'll see it here!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">🔍</span>
          <h2 className="text-xl font-semibold">Find Restaurants</h2>
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search for restaurants, food types, or locations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pl-10"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            🍕
          </div>
        </div>
      </div>

      {/* Restaurant Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">🏷️</span>
          <h2 className="text-xl font-semibold">Popular Categories</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: 'Fast Food', emoji: '🍔', filter: 'fast food' },
            { name: 'Local Food', emoji: '🌮', filter: 'local' },
            { name: 'Pizza', emoji: '🍕', filter: 'pizza' },
            { name: 'Indian', emoji: '🍛', filter: 'indian' },
            { name: 'Chinese', emoji: '🥡', filter: 'chinese' },
            { name: 'Coffee', emoji: '☕', filter: 'coffee' },
            { name: 'Grand Bazaar', emoji: '🏬', filter: 'grand-bazaar' },
            { name: 'Seafood', emoji: '🐟', filter: 'seafood' }
          ].map((category) => (
            <button
              key={category.name}
              onClick={() => setSearchQuery(category.filter)}
              className="p-3 border border-gray-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition-all fun-button text-center"
            >
              <div className="text-2xl mb-1">{category.emoji}</div>
              <div className="text-sm font-medium">{category.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-6">
          <span className="text-2xl mr-2">🍽️</span>
          <h2 className="text-xl font-semibold">
            {searchQuery ? `Search Results (${filteredRestaurants.length})` : 'All Restaurants'}
          </h2>
        </div>
        
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">😔</div>
            <p className="text-gray-500 text-lg">No restaurants found</p>
            <p className="text-gray-400">Try a different search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                onOrder={() => setSelectedRestaurant(restaurant.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Order Modal */}
      {selectedRestaurant && (
        <OrderModal
          restaurantId={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
        />
      )}
    </div>
  );
} 