/* eslint-disable react/jsx-no-bind */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { StorageContext } from '../../../contexts/StorageProvider';
import Button from '../../../ui/button/Button';

export default function TaskModal({ team, projectId }) {
  const { saveTaskDataToProjectDataDb } = useContext(StorageContext);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState({
    taskName: '',
    assignee: '',
    dueDate: '',
    priority: '',
    status: 'Pending',
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  // save team data to db
  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { ...input, assignee: JSON.parse(input.assignee) };
    // console.log(taskData);
    saveTaskDataToProjectDataDb(projectId, taskData);
    toast.success('Task is Created Successfully');
    closeModal();
  };

  return (
    <>
      <div>
        <Button onClick={openModal}>Add a task</Button>
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
                <Dialog.Panel className="w-full max-w-2xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all overflow-y-scroll hide-scrollbar">
                  {/* modal title */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <span className="text-primary">Create</span>
                    {' '}
                    a task
                  </Dialog.Title>
                  {/* modal contents */}
                  <section className="mt-2">
                    <form onSubmit={handleSubmit} className="space-y-3">
                      {/* task name */}
                      <div>
                        <label htmlFor="project__name" className="block text-xs font-medium text-gray-700">
                          Task Name
                        </label>
                        <input
                          type="text"
                          id="project__name"
                          placeholder="Ex: Create a dashboard with charts"
                          className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm focus:ring-primary"
                          onChange={(e) => setInput({ ...input, taskName: e.target.value })}
                          value={input.taskName}
                          required
                        />
                      </div>
                      {/* other task information */}
                      <div className="grid grid-cols-3 items-center gap-x-2">
                        {/* select assignee */}
                        <div>
                          <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                            Select Assignee
                          </label>
                          <select
                            name="HeadlineAct"
                            id="HeadlineAct"
                            className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            onChange={(e) => setInput({ ...input, assignee: e.target.value })}
                            value={input.assignee}
                            required
                          >
                            <option defaultValue hidden>Select</option>
                            {
                              team?.members?.map((member, index) => (
                                <option key={index} value={JSON.stringify(member)}>{member?.name}</option>
                              ))
                            }
                          </select>
                        </div>
                        {/* due date */}
                        <div>
                          <label htmlFor="project__name" className="block text-xs font-medium text-gray-700">
                            Due Date
                          </label>
                          <input
                            type="date"
                            id="project__name"
                            placeholder="Ex: Team Elevators"
                            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm focus:ring-primary"
                            onChange={(e) => setInput({ ...input, dueDate: e.target.value })}
                            value={input.dueDate}
                            required
                          />
                        </div>
                        {/* priority */}
                        <div>
                          <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                            Priority level
                          </label>
                          <select
                            name="HeadlineAct"
                            id="HeadlineAct"
                            className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                            onChange={(e) => setInput({ ...input, priority: e.target.value })}
                            value={input.priority}
                          >
                            <option defaultValue hidden>Select</option>
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                          </select>
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
