import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Button from '../../ui/button/Button';

export default function Login() {
  const {
    loginUser, loading, setLoading,
  } = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleLoginUser = (data) => {
    const { email } = data;
    const { password } = data;
    loginUser(email, password)
      .then((result) => {
        const { user } = result;
        console.log(user);
        toast.success('Login Successful');
        setLoading(false);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          <span className="text-primary">Login</span>
          {' '}
          to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleLoginUser)} className="space-y-4">
          {/* email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
                {...register('email', {
                  required: 'Email is required',
                })}
              />
              {errors.email && <p className="mt-1 text-red-500 font-medium">{errors?.email.message}</p>}
            </div>
          </div>
          {/* password */}
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to="/" className="font-semibold text-primary hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
                {...register('password', {
                  required: 'Password is Required',
                  minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                })}
              />
              {errors.password && <p className="mt-1 text-red-500 font-medium">{errors.password.message}</p>}
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              disabled={loading}
            >
              {
                !loading
                  ? 'Login'
                  : (
                    <span className="flex items-center justify-center space-x-2 py-2">
                      <span className="w-2 h-2 rounded-full animate-pulse bg-secondary" />
                      <span className="w-2 h-2 rounded-full animate-pulse bg-secondary" />
                      <span className="w-2 h-2 rounded-full animate-pulse bg-secondary" />
                      <span className="w-2 h-2 rounded-full animate-pulse bg-secondary" />
                    </span>
                  )
              }
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          {' '}
          <Link to="/register" className="font-semibold leading-6 text-primary hover:text-dark">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}
