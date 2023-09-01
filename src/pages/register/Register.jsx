import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { saveUserDataToDb } from '../../db-api/db-api';
import Button from '../../ui/button/Button';

export default function Register() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const {
    createUser, updateUserProfile, loading, setLoading,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterUser = (data) => {
    const { username } = data;
    const image = data.image[0];
    const { email } = data;
    const { password } = data;
    const { bio } = data;
    const formData = new FormData();
    formData.append('image', image);
    // imgbb file upload url
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`;
    fetch(url, { method: 'POST', body: formData })
      .then((res) => res.json())
      .then((photoData) => {
        // create a new user at firebase
        createUser(email, password)
          .then((result) => {
            setLoading(true);
            const { user } = result;
            // update user profile to firebase
            updateUserProfile(username, photoData.data.url)
              .then(() => {
                setLoading(false);
                // save to localStorage
                saveUserDataToDb(username, email, bio);
                navigate('/');
                toast.success('Register user successfully');
              }).catch((err) => {
                console.error(err);
                toast.error(err.message);
              });
            console.log(user);
          })
          .catch((err) => {
            console.error(err);
            setLoading(false);
            toast.error(err.message);
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

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
        <form onSubmit={handleSubmit(handleRegisterUser)} className="space-y-4">
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
                {...register('username', {
                  required: 'Username is required',
                })}
              />
              {errors.username && <p className="mt-1 text-red-500 font-semibold">{errors.username?.message}</p>}
            </div>
          </div>
          {/* bio */}
          <div>
            <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              id="OrderNotes"
              className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
              rows={2}
              placeholder="Enter any additional order notes..."
              {...register('bio', {
                required: 'Bio is required',
              })}
            />
            {errors.bio && <p className="mt-1 text-red-500 font-semibold">{errors.bio?.message}</p>}
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
                className="block w-full text-sm rounded-md text-slate-500 file:mr-4 file:py-2 file:px-4 border-2 file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-secondary focus:ring-dark hover:file:bg-dark"
                accept="image/*"
                {...register('image', {
                  required: 'Profile photo is required',
                })}
              />
              {errors.image && <p className="mt-1 text-red-500 font-semibold">{errors.image?.message}</p>}
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
                {...register('email', {
                  required: 'Email is required',
                })}
              />
              {errors.email && <p className="mt-1 text-red-500 font-semibold">{errors.email?.message}</p>}
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark sm:text-sm sm:leading-6"
                {...register('password', {
                  required: 'Password is Required',
                  minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                })}
              />
              {errors.password && <p className="mt-1 text-red-500 font-semibold">{errors.password?.message}</p>}
            </div>
          </div>
          {/* submit button */}
          <div>
            <Button
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              disabled={loading}
            >
              {
                !loading
                  ? 'Register'
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
