import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex h-screen  justify-center bg-black size-full">
      <div className="flex w-[400px] max-w-4xl rounded-lg shadow-md h-3/4 shadow-line mt-10">
        <div className="w-full p-8 bg-white  rounded-md">
          <h2 className="text-2xl font-bold text-center mb-6 mt-7">Sign in</h2>
          <form className='mt-7'>
            <div className="mb-4">
              <input
                type="email"
                placeholder="USERNAME"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
                onClick={() => { }}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="PASSWORD"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-purple-600" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-line hover:underline hover:text-black duration-300">Forgot password?</a>
            </div>
            <Link to="/Profile">
              <button
                type="submit"
                className="w-full py-2 bg-line text-black rounded-md hover:bg-red-400 transition-colors font-semibold"
              >
                SIGN IN
              </button>
            </Link>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
          </p>
          <div className='group  relative mt-5 max-w-fit mx-auto'>
            <Link to="/Register" className="text-black font-semibold min-h-fit px-2.5 py-1  rounded-md duration-300">
              CREATE
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center mt-7"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
