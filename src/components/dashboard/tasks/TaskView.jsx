/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Button from '../../../ui/button/Button';

export default function TaskView({ task }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    taskName, assignee, dueDate, priority, status, description,
  } = task || {};

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div>
        <button onClick={openModal} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
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
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* modal title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <span className="text-primary font-semibold">
                      Task
                    </span>
                    {' '}
                    Details
                  </Dialog.Title>
                  {/* modal contents */}
                  <div className="flow-root mt-2">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Name:</dt>
                        <dd className="sm:col-span-2 text-primary">{taskName}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Assignee</dt>
                        <dd className="text-gray-700 sm:col-span-2">{assignee?.name}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Assignee Email</dt>
                        <dd className="text-gray-700 sm:col-span-2">{assignee?.email}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Due Date</dt>
                        <dd className="text-gray-700 sm:col-span-2">{(new Date(dueDate).toDateString())}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Priority Level</dt>
                        <dd className="text-gray-700 sm:col-span-2">{priority}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Status</dt>
                        <dd className="text-gray-700 sm:col-span-2">{status}</dd>
                      </div>
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <dt className="font-medium text-gray-900">Description</dt>
                        <dd className="text-gray-700 sm:col-span-2">
                          {description || 'N/A'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="mt-4">
                    <Button
                      onClick={closeModal}
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-6 py-2 text-sm font-medium text-dark hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
