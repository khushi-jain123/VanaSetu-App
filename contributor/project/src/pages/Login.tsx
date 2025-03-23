import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { login, error, loading } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    try {
      await login(data.email, data.password);
      navigate('/profile');
    } catch (err) {
      // Error is handled by the AuthContext
    }
  };
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Welcome Back</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className={`w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
        </div>
        
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition-colors disabled:bg-green-400"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-green-700 hover:text-green-800 font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;