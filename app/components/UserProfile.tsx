'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import { logOut } from '../firebase/auth';

export default function UserProfile() {
  const { user, loading } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logOut();
      router.push('/');
      setShowDropdown(false);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <div className="animate-pulse bg-white/10 h-8 w-20 rounded"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center space-x-4">
        <a href="/signup">
          <button className="bg-white/10 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-white/20">
            Sign Up
          </button>
        </a>
        <a href="/signin">
          <button className="text-sm font-medium px-4 py-2 text-slate-300">Log in</button>
        </a>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center space-x-2 text-white hover:text-purple-400 transition-colors"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
          <span className="text-sm font-semibold">
            {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email?.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-sm font-medium">
          {user.displayName || user.email?.split('@')[0]}
        </span>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-slate-700 py-2 z-50">
          <div className="px-4 py-2 border-b border-slate-700">
            <p className="text-sm font-medium text-white">
              {user.displayName || 'User'}
            </p>
            <p className="text-xs text-slate-400">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
