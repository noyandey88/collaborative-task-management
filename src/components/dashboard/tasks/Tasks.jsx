import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StorageContext } from '../../../contexts/StorageProvider';
import Task from './Task';

export default function Tasks() {
  const { id } = useParams();
  const { projects, filterTitle, sortTitle } = useContext(StorageContext);
  const [project, setProject] = useState({});
  const { tasks } = project || {};

  useEffect(() => {
    const filteredProject = projects?.find((p) => p?.id === id);
    setProject(filteredProject);
  }, [id, projects]);

  // filter by task status
  const filterByStatus = (task) => {
    switch (filterTitle) {
      case 'Completed':
        return task?.status === 'Completed';
      case 'Inprogress':
        return task?.status === 'Inprogress';
      case 'Pending':
        return task?.status === 'Pending';
      case '':
        return true;
      default:
        return true;
    }
  };

  const sortByDueDate = (a, b) => {
    switch (sortTitle) {
      case 'Ascending':
        return new Date(a.dueDate) - new Date(b.dueDate);
      case 'Descending':
        return new Date(b.dueDate) - new Date(a.dueDate);
      case '':
        return true;
      default:
        return true;
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" className="pl-6 py-3 text-left">
            SL
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Task Name
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Assignee
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 whitespace-nowrap">
                Due Date
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Priority
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Status
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Details
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {tasks?.sort(sortByDueDate)?.filter(filterByStatus)?.map((task, index) => (
          <Task
            key={task?.id}
            task={task}
            index={index}
            projectId={id}
          />
        ))}
      </tbody>
    </table>
  );
}
