'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-green-50">
      <div className="text-center">
        <div className="relative">
          {/* Animated food icons */}
          <div className="text-6xl animate-bounce mb-4">🍽️</div>
          <div className="absolute -top-2 -left-2 text-2xl animate-ping">🍔</div>
          <div className="absolute -top-2 -right-2 text-2xl animate-ping animation-delay-200">🍕</div>
          <div className="absolute -bottom-2 -left-2 text-2xl animate-ping animation-delay-400">🌮</div>
          <div className="absolute -bottom-2 -right-2 text-2xl animate-ping animation-delay-600">🍜</div>
        </div>
        
        <div className="mt-8">
          <h2 className="text-2xl font-bold gradient-text font-fun mb-2">
            Preparing your lunch experience...
          </h2>
          <p className="text-gray-600 animate-pulse">
            Getting everything ready! 🎉
          </p>
        </div>
        
        {/* Loading bar */}
        <div className="mt-6 w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
} 