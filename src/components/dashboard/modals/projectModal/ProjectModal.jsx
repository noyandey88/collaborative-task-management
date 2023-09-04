/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { StorageContext } from '../../../../contexts/StorageProvider';
import { updateProjectToTeam } from '../../../../db-api/db-api';
import Button from '../../../../ui/button/Button';

export default function ProjectModal({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const { loggedInUserTeamInfo, saveProjectsToDB } = useContext(StorageContext);
  const [projectName, setProjectName] = useState('');
  const [teamInfo, setTeamInfo] = useState('');
  const { user } = useContext(AuthContext);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  // add project data to db
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedTeamInfo = JSON.parse(teamInfo);
    saveProjectsToDB(projectName, parsedTeamInfo, user?.email);
    // update project info to team data
    updateProjectToTeam(parsedTeamInfo?.id, projectName);
    closeModal();
    setProjectName('');
    setTeamInfo('');
    toast.success('Project is added successfully');
  };

  return (
    <>
      <div>
        {
          list
            ? (
              <Button onClick={openModal} className="bg-transparent border border-secondary text-secondary py-1">Create a Project</Button>
            ) : (
              <button onClick={openModal} type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-primary hover:text-secondary focus:ring-2 focus:ring-dark w-full">
                Create Project
              </button>
            )
        }

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
                    Create a Project
                  </Dialog.Title>
                  {/* modal content */}
                  <section className="mt-2">
                    <form onSubmit={handleSubmit} className="space-y-2">
                      {/* project name */}
                      <div>
                        <label htmlFor="project__name" className="block text-xs font-medium text-gray-700">
                          Project Name
                        </label>
                        <input
                          type="text"
                          id="project__name"
                          placeholder="Ex: task-management"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm focus:ring-primary"
                          required
                          onChange={(e) => setProjectName(e.target.value)}
                          value={projectName}
                        />
                      </div>
                      {/* select team */}
                      <div>
                        <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                          Select a Team
                        </label>
                        <select
                          name="HeadlineAct"
                          id="HeadlineAct"
                          className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                          required
                          onChange={(e) => setTeamInfo(e.target.value)}
                          value={teamInfo}
                        >
                          <option defaultValue hidden>Select</option>
                          {
                            loggedInUserTeamInfo?.map((team) => (
                              <option key={team.id} value={JSON.stringify(team)}>{team?.name}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="mt-4">
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
