'use client';

import { useState } from 'react';
import { restaurants } from '@/data/restaurants';
import CreateLunchRunModal from '@/components/CreateLunchRunModal';

export default function LunchmanDashboard() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="text-center">
        <div className="text-4xl mb-4 animate-bounce">🚶‍♂️</div>
        <h1 className="text-3xl font-bold gradient-text font-fun mb-2">
          Ready to be the hero? 
        </h1>
        <p className="text-gray-600 text-lg">
          Start a lunch run and collect orders from your team! 🦸‍♂️
        </p>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">⚡</span>
          <h2 className="text-xl font-semibold">Quick Actions</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => setShowCreateModal(true)}
            className="p-6 border-2 border-dashed border-primary-300 rounded-lg hover:border-primary-400 hover:bg-primary-50 transition-all fun-button text-center"
          >
            <div className="text-3xl mb-2">🚀</div>
            <h3 className="font-semibold text-lg text-primary-700">Start New Lunch Run</h3>
            <p className="text-primary-600 text-sm">Pick a restaurant and collect orders</p>
          </button>

          <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 text-center">
            <div className="text-3xl mb-2">📋</div>
            <h3 className="font-semibold text-lg text-gray-600">View My Runs</h3>
            <p className="text-gray-500 text-sm">Manage active and past lunch runs</p>
            <div className="mt-2 text-sm text-gray-400">Coming soon!</div>
          </div>
        </div>
      </div>

      {/* Active Lunch Runs */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">🏃‍♂️</span>
          <h2 className="text-xl font-semibold">Your Active Lunch Runs</h2>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center">
            <span className="text-2xl mr-2">💤</span>
            <div>
              <p className="font-medium text-blue-800">No active lunch runs</p>
              <p className="text-blue-600 text-sm">
                Start a new lunch run to begin collecting orders from your team!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Restaurants */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">⭐</span>
          <h2 className="text-xl font-semibold">Popular Restaurants</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {restaurants.slice(0, 6).map((restaurant) => (
            <div key={restaurant.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all fun-card">
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{restaurant.image}</div>
                <div className="flex-1">
                  <h3 className="font-semibold">{restaurant.name}</h3>
                  <p className="text-gray-600 text-sm">{restaurant.location}</p>
                  <div className="flex items-center mt-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600 ml-1">{restaurant.rating}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-600">{restaurant.deliveryTime} min</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white rounded-2xl p-6 shadow-lg fun-card">
        <div className="flex items-center mb-4">
          <span className="text-2xl mr-2">📖</span>
          <h2 className="text-xl font-semibold">How Being a Lunchman Works</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">1️⃣</div>
            <h3 className="font-semibold mb-2">Start a Run</h3>
            <p className="text-gray-600 text-sm">
              Choose a restaurant and set a deadline for orders
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">2️⃣</div>
            <h3 className="font-semibold mb-2">Collect Orders</h3>
            <p className="text-gray-600 text-sm">
              Team members add their orders to your lunch run
            </p>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-3">3️⃣</div>
            <h3 className="font-semibold mb-2">Pick Up & Deliver</h3>
            <p className="text-gray-600 text-sm">
              Go get the food and deliver to your team!
            </p>
          </div>
        </div>
      </div>

      {/* Create Lunch Run Modal */}
      {showCreateModal && (
        <CreateLunchRunModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
} 