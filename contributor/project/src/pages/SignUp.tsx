import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../contexts/AuthContext';

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAffiliated: boolean;
  organizationType: string;
  organizationName: string;
  experience: string;
  monthlyUpdates: boolean;
  yearCare: boolean;
  termsAgreed: boolean;
};

const SignUp: React.FC = () => {
  const { signup, error, loading } = useAuth();
  const navigate = useNavigate();
  const [isAffiliated, setIsAffiliated] = useState(false);
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const password = watch('password');
  
  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      return; // Form validation will handle this
    }
    
    try {
      await signup({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        organization: {
          isAffiliated: data.isAffiliated,
          type: data.isAffiliated ? data.organizationType : undefined,
          name: data.isAffiliated ? data.organizationName : undefined,
        },
        experience: data.experience,
        commitments: {
          monthlyUpdates: data.monthlyUpdates,
          yearCare: data.yearCare,
        },
      });
      
      navigate('/profile');
    } catch (err) {
      // Error is handled by the AuthContext
    }
  };
  
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-green-800 mb-6">Join Community</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-700 border-b pb-2">Personal Information</h2>
          
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              id="fullName"
              type="text"
              className={`w-full px-3 py-2 border rounded-md ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
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
              Password *
            </label>
            <input
              id="password"
              type="password"
              className={`w-full px-3 py-2 border rounded-md ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
              {...register('password', { 
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
          </div>
          
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password *
            </label>
            <input
              id="confirmPassword"
              type="password"
              className={`w-full px-3 py-2 border rounded-md ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
              {...register('confirmPassword', { 
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match'
              })}
            />
            {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>}
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-700 border-b pb-2">Organization Details</h2>
          
          <div>
            <div className="flex items-center mb-2">
              <input
                id="isAffiliated"
                type="checkbox"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                {...register('isAffiliated')}
                onChange={e => setIsAffiliated(e.target.checked)}
              />
              <label htmlFor="isAffiliated" className="ml-2 block text-sm text-gray-700">
                Are you associated with any organization?
              </label>
            </div>
          </div>
          
          {isAffiliated && (
            <>
              <div>
                <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Type *
                </label>
                <select
                  id="organizationType"
                  className={`w-full px-3 py-2 border rounded-md ${errors.organizationType ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('organizationType', { 
                    required: isAffiliated ? 'Please select organization type' : false
                  })}
                >
                  <option value="">Select organization type</option>
                  <option value="NGO">NGO</option>
                  <option value="School">School</option>
                  <option value="College">College</option>
                  <option value="Environmental Group">Environmental Group</option>
                  <option value="Independent Social Worker">Independent Social Worker</option>
                </select>
                {errors.organizationType && <p className="mt-1 text-sm text-red-600">{errors.organizationType.message}</p>}
              </div>
              
              <div>
                <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-1">
                  Organization Name *
                </label>
                <input
                  id="organizationName"
                  type="text"
                  className={`w-full px-3 py-2 border rounded-md ${errors.organizationName ? 'border-red-500' : 'border-gray-300'}`}
                  {...register('organizationName', { 
                    required: isAffiliated ? 'Organization name is required' : false
                  })}
                />
                {errors.organizationName && <p className="mt-1 text-sm text-red-600">{errors.organizationName.message}</p>}
              </div>
            </>
          )}
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-700 border-b pb-2">Experience & Contribution</h2>
          
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Years of Experience in Tree Plantation *
            </label>
            <select
              id="experience"
              className={`w-full px-3 py-2 border rounded-md ${errors.experience ? 'border-red-500' : 'border-gray-300'}`}
              {...register('experience', { required: 'Please select your experience' })}
            >
              <option value="">Select experience</option>
              <option value="0-1 years">0-1 years</option>
              <option value="2-3 years">2-3 years</option>
              <option value="4+ years">4+ years</option>
            </select>
            {errors.experience && <p className="mt-1 text-sm text-red-600">{errors.experience.message}</p>}
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-green-700 border-b pb-2">Commitment & Agreement</h2>
          
          <div>
            <div className="flex items-center mb-2">
              <input
                id="monthlyUpdates"
                type="checkbox"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                {...register('monthlyUpdates')}
              />
              <label htmlFor="monthlyUpdates" className="ml-2 block text-sm text-gray-700">
                Would you be able to provide monthly updates with plant photos?
              </label>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <input
                id="yearCare"
                type="checkbox"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                {...register('yearCare')}
              />
              <label htmlFor="yearCare" className="ml-2 block text-sm text-gray-700">
                Do you agree to take care of the trees for a minimum of one year?
              </label>
            </div>
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <input
                id="termsAgreed"
                type="checkbox"
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
                {...register('termsAgreed', { required: 'You must agree to the terms and conditions' })}
              />
              <label htmlFor="termsAgreed" className="ml-2 block text-sm text-gray-700">
                I agree to the terms and conditions *
              </label>
            </div>
            {errors.termsAgreed && <p className="mt-1 text-sm text-red-600">{errors.termsAgreed.message}</p>}
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded-md transition-colors disabled:bg-green-400"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;