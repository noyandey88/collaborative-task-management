import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../ui/button/Button';

export default function Register() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <span className="text-primary">Register</span>
          {' '}
          to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4">
          {/* username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* user profile photo */}
          <div>
            <label htmlFor="profile__photo" className="block text-sm font-medium leading-6 text-gray-900">
              Profile photo
            </label>
            <div className="mt-1">
              <input
                id="profile__photo"
                type="file"
                className="block w-full text-sm rounded-md text-slate-500 file:mr-4 file:py-2 file:px-4 border-2 file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-secondary hover:file:bg-dark"
                accept="image/*"
              />
            </div>
          </div>
          {/* email */}
          <div>
            <label htmlFor="email1" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email1"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* submit button */}
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign in
            </Button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already a member?
          {' '}
          <Link to="/login" className="font-semibold leading-6 text-primary hover:text-dark">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}
