import { useState } from 'react';
import { updateTaskPriority, updateTaskStatus } from '../../../db-api/db-api';

export default function Task({ task, index, projectId }) {
  const [newStatus, setNewStatus] = useState('');
  const [newPriority, setNewPriority] = useState('');
  const {
    id, taskName, assignee, dueDate, priority, status,
  } = task || {};

  const handlePriorityChange = (e) => {
    setNewPriority(e.target.value);
    updateTaskPriority(projectId, id, e.target.value);
  };

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
    updateTaskStatus(projectId, id, e.target.value);
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
          <span className={`text-sm text-primary ${status === 'Done' ? 'line-through' : null}`}>{taskName}</span>
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
            <option value="Done">Done</option>
          </select>
        </div>
      </td>
      {/* details view button */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="px-2 py-2">
          <button type="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
