import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User,
  updateProfile,
} from 'firebase/auth';
import { auth } from './config';

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Sign up with email and password
export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName?: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update display name if provided
    if (displayName && userCredential.user) {
      await updateProfile(userCredential.user, {
        displayName: displayName,
      });
    }
    
    return userCredential;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in with email and password
export const signInWithEmailAndPasswordAuth = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign in with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Sign out
export const logOut = async () => {
  try {
    await signOut(auth);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// Listen to auth state changes
export const onAuthStateChangedListener = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => {
  return auth.currentUser;
};
