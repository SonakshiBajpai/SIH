# Firebase Authentication Setup

This project uses Firebase Authentication for user sign-in and sign-up functionality.

## Setup Instructions

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or select an existing project
3. Follow the setup wizard

### 2. Enable Authentication

1. In your Firebase project, go to **Authentication** > **Sign-in method**
2. Enable the following sign-in methods:
   - **Email/Password**: Click on it and toggle "Enable"
   - **Google**: Click on it, toggle "Enable", and configure your OAuth consent screen

### 3. Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click on "Web app" icon (`</>`) to add a web app
4. Register your app and copy the configuration object

### 4. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Replace the placeholder values with your actual Firebase configuration values.

### 5. Google Authentication Setup

For Google authentication to work properly:

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Click on **Google** provider
3. Add your domain to the authorized domains list
4. Make sure your OAuth consent screen is properly configured in Google Cloud Console

## Features Implemented

- ✅ Email/Password Sign Up
- ✅ Email/Password Sign In
- ✅ Google Authentication
- ✅ User Profile Display
- ✅ Logout Functionality
- ✅ Redirect to main page after authentication
- ✅ Error handling and loading states
- ❌ Facebook Authentication (removed as requested)

## Usage

1. Users can sign up with email/password or Google
2. Users can sign in with email/password or Google
3. After successful authentication, users are redirected to the main page
4. Authenticated users see their profile in the header with logout option
5. Non-authenticated users see Sign Up and Log In buttons

## Files Modified/Created

- `app/firebase/config.js` - Firebase configuration (existing)
- `app/firebase/auth.ts` - Firebase authentication functions (new)
- `app/hooks/useAuth.tsx` - Authentication context and hook (new)
- `app/components/UserProfile.tsx` - User profile component (new)
- `app/layout.tsx` - Added AuthProvider wrapper
- `app/signin/page.tsx` - Updated with Firebase authentication
- `app/signup/page.tsx` - Updated with Firebase authentication
- `app/page.tsx` - Updated to use UserProfile component
