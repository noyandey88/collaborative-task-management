/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import AsyncSelect from 'react-select/async';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { StorageContext } from '../../../../contexts/StorageProvider';
import Button from '../../../../ui/button/Button';

export default function TeamModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { dbUsers, saveTeamToDB } = useContext(StorageContext);
  const [members, setMembers] = useState([]);
  const [teamName, setTeamName] = useState('');
  const { user } = useContext(AuthContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // create a new array from db user data
  const formattedUserNames = dbUsers
    ? dbUsers?.map((userInfo) => ({
      value: userInfo?.username.toLowerCase(),
      label: userInfo.username,
      email: userInfo.email,
    })) : [];

  // working team member selection
  const filterNames = (inputValue) => formattedUserNames.filter((i) => i.label.toLowerCase().includes(inputValue.toLowerCase()));

  const promiseOptions = (inputValue) => new Promise((resolve) => {
    setTimeout(() => {
      resolve(filterNames(inputValue));
    }, 1000);
  });

  // get values from react select
  const handleChange = (value) => {
    // format the team data for set team data
    const formatMembers = value?.map((member) => ({
      name: member.label,
      email: member.email,
    }));
    setMembers(formatMembers);
  };

  // save team data to db
  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredMembers = members?.filter((member) => member?.email !== user?.email);
    saveTeamToDB(teamName, filteredMembers, user?.email, user?.displayName);
    toast.success('Team Created Successfully');
    closeModal();
    setTeamName('');
  };

  return (
    <>
      <div>
        <button onClick={openModal} type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary hover:text-secondary focus:ring-2 focus:ring-dark w-full">
          Create Team
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
                <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* modal title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <span className="text-primary">Create</span>
                    {' '}
                    a Team
                  </Dialog.Title>
                  {/* modal contents */}
                  <section className="mt-2">
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* team name */}
                      <div>
                        <label htmlFor="project__name" className="block text-xs font-medium text-gray-700">
                          Team Name
                        </label>
                        <input
                          type="text"
                          id="project__name"
                          placeholder="Ex: Team Elevators"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm focus:ring-primary"
                          onChange={(e) => setTeamName(e.target.value)}
                          value={teamName}
                          required
                        />
                      </div>
                      {/* select team */}
                      <div>
                        <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                          Select Members
                        </label>
                        <div>
                          <AsyncSelect
                            isMulti
                            cacheOptions
                            defaultOptions
                            loadOptions={promiseOptions}
                            onChange={handleChange}
                            required
                            menuPosition="absolute"
                          />
                        </div>
                      </div>
                      <div>
                        <Button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-secondary px-6 py-2 text-sm font-medium text-dark hover:bg-secondary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Create
                        </Button>
                      </div>
                    </form>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
