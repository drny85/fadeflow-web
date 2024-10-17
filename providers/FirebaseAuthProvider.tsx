'use client'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, User } from 'firebase/auth';
import { auth } from '@/firebase';


// Define the shape of the AuthContext
interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<User | null>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// FirebaseAuthProvider component
export const FirebaseAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  // Login function
  const login = async (email: string, password: string):Promise<User | null> => {
    try {
   const {user} = await signInWithEmailAndPassword(auth, email, password);
   return user;
    } catch (error) {
      console.error('Login error:', error);
     return null
    }
  };

  const authContextValue: AuthContextType = {
    user,
   loading,
    login,
  };
 

  return (
    <AuthContext.Provider value={authContextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the Firebase Auth context
export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
       throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
 }
 