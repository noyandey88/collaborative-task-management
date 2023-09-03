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
          <TaskView task={task} />
        </div>
      </td>
    </tr>
  );
}
