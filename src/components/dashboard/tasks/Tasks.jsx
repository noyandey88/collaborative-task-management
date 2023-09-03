import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Task from './Task';

export default function Tasks() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { tasks } = project || {};

  useEffect(() => {
    const parsedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    const filteredProject = parsedProjectData.find((p) => p?.id === id);
    setProject(filteredProject);
  }, [localStorage, id]);

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
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
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
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {tasks?.map((task, index) => <Task key={task?.id} task={task} index={index} projectId={id} />)}
      </tbody>
    </table>
  );
}
