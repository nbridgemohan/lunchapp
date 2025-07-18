'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navbar from '@/components/Navbar';
import RoleSelector from '@/components/RoleSelector';
import LunchmanDashboard from '@/components/LunchmanDashboard';
import LuncheeDashboard from '@/components/LuncheeDashboard';

export default function Dashboard() {
  const { user } = useAuth();
  const [showRoleSelector, setShowRoleSelector] = useState(false);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Navbar onRoleChange={() => setShowRoleSelector(true)} />
      
      <main className="container mx-auto px-4 py-8">
        {showRoleSelector && (
          <RoleSelector onClose={() => setShowRoleSelector(false)} />
        )}
        
        {user.role === 'lunchman' ? (
          <LunchmanDashboard />
        ) : (
          <LuncheeDashboard />
        )}
      </main>
    </div>
  );
} 