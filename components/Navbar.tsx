'use client';

import { useAuth } from '@/contexts/AuthContext';

interface NavbarProps {
  onRoleChange: () => void;
}

export default function Navbar({ onRoleChange }: NavbarProps) {
  const { user, logout } = useAuth();

  if (!user) return null;

  const getRoleEmoji = (role: string) => {
    return role === 'lunchman' ? '🚶‍♂️' : '🍽️';
  };

  const getRoleColor = (role: string) => {
    return role === 'lunchman' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  return (
    <nav className="bg-white shadow-lg border-b-4 border-primary-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🍽️</span>
            <h1 className="text-xl font-bold gradient-text font-fun">
              LunchApp
            </h1>
          </div>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            {/* Current Role Badge */}
            <button
              onClick={onRoleChange}
              className={`px-3 py-1 rounded-full text-sm font-medium fun-button ${getRoleColor(user.role)}`}
            >
              {getRoleEmoji(user.role)} {user.role === 'lunchman' ? 'Lunchman' : 'Lunchee'}
            </button>

            {/* User Profile */}
            <div className="flex items-center space-x-2">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-primary-200 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-800">
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <span className="text-gray-700 font-medium">{user.name}</span>
            </div>

            {/* Logout Button */}
            <button
              onClick={logout}
              className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-medium hover:bg-red-200 fun-button"
            >
              Logout 👋
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 