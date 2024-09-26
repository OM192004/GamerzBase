import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex h-fit  justify-center ">
      <div className="flex w-[400px] max-w-4xl rounded-lg shadow-lg border-2">
        <div className="w-full p-8 bg-white">
          <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
          <form>
            
            <div className="mb-4">
              <input
                type="email"
                placeholder="USERNAME"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold "
                onClick={()=>{}}
              />
            </div>
            <div className="mb-4">
            <input
                type="password"
                placeholder="PASSWORD"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold "
                onClick={()=>{}}
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">Forgot password?</a>
            </div>
            <Link to="/Profile">
            <button
              type="submit"
              className="w-full py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Sign In
            </button>
            </Link>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-600 hover:underline">
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
