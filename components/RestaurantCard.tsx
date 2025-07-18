'use client';

import { Restaurant } from '@/types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onOrder: () => void;
}

export default function RestaurantCard({ restaurant, onOrder }: RestaurantCardProps) {
  const getDeliveryTimeColor = (time: number) => {
    if (time <= 15) return 'text-green-600';
    if (time <= 30) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getRatingStars = (rating: number) => {
    const stars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;
    return '⭐'.repeat(stars) + (hasHalf ? '✨' : '');
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all fun-card">
      {/* Restaurant Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="text-3xl">{restaurant.image}</div>
          <div>
            <h3 className="font-semibold text-lg">{restaurant.name}</h3>
            <p className="text-gray-600 text-sm">{restaurant.category}</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${
          restaurant.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {restaurant.isActive ? 'Open' : 'Closed'}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-3">{restaurant.description}</p>

      {/* Location */}
      <div className="flex items-center text-sm text-gray-500 mb-3">
        <span className="mr-1">📍</span>
        {restaurant.location}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-1">{getRatingStars(restaurant.rating)}</span>
            <span className="text-sm text-gray-600">{restaurant.rating}</span>
          </div>
          <div className={`flex items-center text-sm ${getDeliveryTimeColor(restaurant.deliveryTime)}`}>
            <span className="mr-1">⏱️</span>
            {restaurant.deliveryTime} min
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-4">
        {restaurant.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            #{tag}
          </span>
        ))}
        {restaurant.tags.length > 3 && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
            +{restaurant.tags.length - 3} more
          </span>
        )}
      </div>

      {/* Action Button */}
      <button
        onClick={onOrder}
        disabled={!restaurant.isActive}
        className={`w-full py-2 px-4 rounded-lg font-medium fun-button transition-all ${
          restaurant.isActive
            ? 'bg-primary-500 text-white hover:bg-primary-600'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        {restaurant.isActive ? (
          <>
            <span className="mr-1">🛒</span>
            Order Now
          </>
        ) : (
          <>
            <span className="mr-1">😴</span>
            Currently Closed
          </>
        )}
      </button>
    </div>
  );
} 