import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="flex min-h-screen justify-between bg-black size-full">
        <div className='flex items-end ml-7  mb-4 text-6xl font-[900] text-white'>
            <h1 className=' mb-44 ml-5'>CREATE YOUR ACCOUNT</h1>
        </div>
      <div className="flex w-[400px] max-w-4xl rounded-lg shadow-md  shadow-line mt-10 h-fit mr-10">
      
        <div className="w-full p-8 bg-white  max-h-fit rounded-md">
          <h2 className="text-2xl font-bold text-center my-7 font-FF Mark W05">Create Account</h2>
          <form>
            <div className="mb-4">
            <input
                type="username"
                placeholder="USERNAME"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
              />
            </div>
            <div className="mb-4">
            <input
                type="password"
                placeholder="PASSWORD"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
              />
            </div>
            <div className="mb-4">
            <input
                type="password"
                placeholder="PASSWORD"
                className="w-full px-4 py-2 rounded-md bg-gray-100 placeholder:text-[10px] placeholder:text-bold hover:bg-gray-200"
              />
            </div>
            <div className="flex items-center mb-6">
              <input type="checkbox" className="form-checkbox text-purple-600 bg-red-600" />
              <span className="ml-2 text-sm text-gray-600">I agree to the Terms & Conditions</span>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-line text-black rounded-md hover:bg-red-400 transition-colors font-semibold "
            >
              CREATE ACCOUNT
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            
          </p>
          <div className='group  relative mt-5 max-w-fit mx-auto'>
            <Link to="/Login" className="text-black font-semibold min-h-fit px-2.5 py-1  rounded-md duration-300">
              SIGN IN
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center mt-7"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
