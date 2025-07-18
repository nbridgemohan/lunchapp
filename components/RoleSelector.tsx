'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { UserRole } from '@/types';

interface RoleSelectorProps {
  onClose: () => void;
}

export default function RoleSelector({ onClose }: RoleSelectorProps) {
  const { user, updateUserRole } = useAuth();
  const [selectedRole, setSelectedRole] = useState<UserRole>(user?.role || 'lunchee');
  const [loading, setLoading] = useState(false);

  const handleRoleChange = async () => {
    if (!user || selectedRole === user.role) {
      onClose();
      return;
    }

    setLoading(true);
    try {
      await updateUserRole(selectedRole);
      onClose();
    } catch (error) {
      console.error('Failed to update role:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full fun-card">
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">🔄</div>
          <h2 className="text-2xl font-bold gradient-text mb-2">Choose Your Role</h2>
          <p className="text-gray-600">What would you like to do today?</p>
        </div>

        <div className="space-y-4 mb-6">
          {/* Lunchee Option */}
          <div
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedRole === 'lunchee'
                ? 'border-green-400 bg-green-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedRole('lunchee')}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🍽️</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">I want to order food</h3>
                <p className="text-gray-600 text-sm">
                  Browse restaurants and place orders for pickup by a lunchman
                </p>
              </div>
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedRole === 'lunchee'
                  ? 'bg-green-400 border-green-400'
                  : 'border-gray-300'
              }`}>
                {selectedRole === 'lunchee' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>
          </div>

          {/* Lunchman Option */}
          <div
            className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
              selectedRole === 'lunchman'
                ? 'border-blue-400 bg-blue-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setSelectedRole('lunchman')}
          >
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🚶‍♂️</div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">I'll pick up food for others</h3>
                <p className="text-gray-600 text-sm">
                  Create lunch runs and collect orders from your team
                </p>
              </div>
              <div className={`w-4 h-4 rounded-full border-2 ${
                selectedRole === 'lunchman'
                  ? 'bg-blue-400 border-blue-400'
                  : 'border-gray-300'
              }`}>
                {selectedRole === 'lunchman' && (
                  <div className="w-full h-full rounded-full bg-white scale-50"></div>
                )}
              </div>
            </div>
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
            onClick={handleRoleChange}
            disabled={loading}
            className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 fun-button disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Updating...
              </span>
            ) : (
              'Confirm'
            )}
          </button>
        </div>
      </div>
    </div>
  );
} 