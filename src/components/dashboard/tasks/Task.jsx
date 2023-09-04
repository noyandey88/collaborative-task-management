import { useContext, useState } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import TaskView from './TaskView';

export default function Task({ task, index, projectId }) {
  const [newStatus, setNewStatus] = useState('');
  const [newPriority, setNewPriority] = useState('');
  const { updateProjectTaskPriority, updateProjectTaskStatus } = useContext(StorageContext);
  const {
    id, taskName, assignee, dueDate, priority, status,
  } = task || {};

  const handlePriorityChange = (e) => {
    setNewPriority(e.target.value);
    updateProjectTaskPriority(projectId, id, e.target.value);
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
    updateProjectTaskStatus(projectId, id, e.target.value);
  };

  return (
    <tr>
      {/* checkbox */}
      <td className="h-px w-px whitespace-nowrap">
        <div className="pl-6 py-3">
          {index + 1}
        </div>
      </td>
      {/* task name */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="px-2 py-3">
          <span className={`text-sm text-primary ${status === 'Completed' ? 'line-through' : null}`}>{taskName}</span>
        </div>
      </td>
      {/* assignee */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="px-4 py-2">
          {assignee?.name}
        </div>
      </td>
      {/* due data */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="text-center">
          {dueDate}
        </div>
      </td>
      {/* priority */}
      <td className="h-px w-px whitespace-nowrap">
        <div>
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            onChange={handlePriorityChange}
            value={priority}
          >
            <option defaultValue hidden>Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </td>
      {/* status */}
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-2 py-2">
          <select
            name="HeadlineAct"
            id="HeadlineAct"
            className="min-w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
            onChange={handleStatusChange}
            value={status}
          >
            <option defaultValue hidden>Select</option>
            <option value="Pending">Pending</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </td>
      {/* details view button */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="px-2 py-2 flex items-center justify-center gap-x-4">
          <TaskView task={task} />
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
