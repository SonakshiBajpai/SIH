'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signInWithEmailAndPasswordAuth, signInWithGoogle } from '../firebase/auth';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPasswordAuth(email, password);
      router.push('/'); // Redirect to main page
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');

    try {
      await signInWithGoogle();
      router.push('/'); // Redirect to main page
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videoplayback.mp4" type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Pink gradient blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-pink-500 via-purple-500 to-transparent rounded-full blur-3xl opacity-30"></div>
      
      {/* Sign In Form */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-8">Sign In.</h1>
        </div>
        
        <form onSubmit={handleEmailSignIn} className="space-y-6">
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-2xl backdrop-blur-sm">
              {error}
            </div>
          )}
          
          {/* Email Input */}
          <div>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-black/30 transition-all"
              required
            />
          </div>
          
          {/* Password Input */}
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border-2 border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-white/40 focus:bg-black/30 transition-all"
              required
            />
          </div>
          
          {/* OR Divider */}
          <div className="text-center my-6">
            <span className="text-white text-lg">or</span>
          </div>
          
          {/* Google Sign In Button */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="w-full px-6 py-4 rounded-2xl bg-black/20 backdrop-blur-sm border-2 border-white/20 text-white flex items-center justify-center space-x-3 hover:border-white/40 hover:bg-black/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
            </button>
          </div>
          
          {/* Sign In Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm border-2 border-purple-300/20 text-white font-semibold text-lg hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-500/20 hover:border-purple-300/40 transition-all duration-300 mt-8 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In.'}
          </button>
        </form>
        
        {/* Sign Up Link */}
        <div className="text-center mt-6">
          <span className="text-gray-300">don&apos;t have an account? </span>
          <Link href="/signup" className="text-white font-semibold hover:underline">
            Create a account
          </Link>
        </div>
      </div>
    </div>
  );
} 