import React, { createContext, useContext, useState, useEffect } from 'react';

// Define user type
export interface User {
  id: string;
  fullName: string;
  email: string;
  organization?: {
    isAffiliated: boolean;
    type?: string;
    name?: string;
  };
  experience: string;
  commitments: {
    monthlyUpdates: boolean;
    yearCare: boolean;
  };
  plants: Plant[];
}

export interface Plant {
  id: string;
  name: string;
  imageUrl: string;
  dateAdded: string;
  adopters: Adopter[];
}

export interface Adopter {
  id: string;
  name: string;
  email: string;
  adoptionDate: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: Omit<User, 'id' | 'plants'> & { password: string }) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Mock signup function
  const signup = async (userData: Omit<User, 'id' | 'plants'> & { password: string }) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a delay and store in localStorage
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if email already exists
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.some((user: User) => user.email === userData.email)) {
        throw new Error('Email already in use');
      }
      
      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        fullName: userData.fullName,
        email: userData.email,
        organization: userData.organization,
        experience: userData.experience,
        commitments: userData.commitments,
        plants: [] // New users start with no plants
      };
      
      // Save to "database" (localStorage)
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Log in the user
      setCurrentUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  // Mock login function
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // In a real app, this would be an API call
      // For demo purposes, we'll simulate a delay and check localStorage
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.email === email);
      
      if (!user) {
        throw new Error('Invalid email or password');
      }
      
      // In a real app, you would verify the password hash
      // For demo purposes, we'll just accept any password
      
      setCurrentUser(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading,
    error
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}