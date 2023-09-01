/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import {
  Fragment, useContext,
  useState,
} from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import Button from '../../../../ui/button/Button';

export default function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedInUserInfo } = useContext(AuthContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button onClick={openModal} type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Profile
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* modal title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <span className="text-primary">Profile</span>
                    {' '}
                    Information
                  </Dialog.Title>
                  {/* modal contents */}
                  <section className="mt-2 space-y-1">
                    {/* username */}
                    <div>
                      <label htmlFor="username" className="block text-xs font-medium text-gray-700">
                        Username
                      </label>
                      <input type="email" id="username" placeholder="john@rhcp.com" className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" defaultValue={loggedInUserInfo?.username} disabled />
                    </div>
                    {/* username */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700">
                        Email
                      </label>
                      <input type="email" id="email" placeholder="john@rhcp.com" className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm" defaultValue={loggedInUserInfo?.email} disabled />
                    </div>
                    {/* bio */}
                    <div>
                      <label htmlFor="OrderNotes" className="block text-sm font-medium text-gray-700">
                        Bio
                      </label>
                      <textarea id="OrderNotes" className="mt-1 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm" rows={2} placeholder="Enter any additional order notes..." defaultValue={loggedInUserInfo?.bio} disabled />
                    </div>
                  </section>
                  <div className="mt-4">
                    <Button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-6 py-2 text-sm font-medium text-dark hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
