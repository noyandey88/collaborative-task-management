import { useContext } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import TaskModal from '../../../pages/daashboard/projects/TaskModal';
import Tasks from './Tasks';

export default function TasksTable({ team, projectId }) {
  const { filterTitle, setFilterTitle } = useContext(StorageContext);
  const { sortTitle, setSortTitle } = useContext(StorageContext);
  return (
    <div className="py-10 lg:py-14">
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b">
                <div className="flex items-center gap-x-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Tasks
                  </h2>
                  <TaskModal team={team} projectId={projectId} table />
                </div>
                {/* sort and filter */}
                <div className="flex items-center gap-x-2">
                  {/* sort */}
                  <div>
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                      <span className="text-primary">Sort</span>
                      {' '}
                      by Priority
                    </label>
                    <select name="HeadlineAct" id="HeadlineAct" className="w-full mt-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                      <option defaultValue hidden>Select</option>
                      <option value="">Default</option>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                      <span className="text-primary">Sort</span>
                      {' '}
                      by Due Date
                    </label>
                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      className="w-full mt-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                      onChange={(e) => setSortTitle(e.target.value)}
                      value={sortTitle}
                    >
                      <option defaultValue hidden>Select</option>
                      <option value="">Default</option>
                      <option value="Ascending">Ascending</option>
                      <option value="Descending">Descending</option>
                    </select>
                  </div>
                  {/* filter */}
                  <div>
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                      <span className="text-primary">Filter</span>
                      {' '}
                      by Status
                    </label>
                    <select
                      name="HeadlineAct"
                      id="HeadlineAct"
                      className="w-full mt-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                      onChange={(e) => setFilterTitle(e.target.value)}
                      value={filterTitle}
                    >
                      <option defaultValue hidden>Select</option>
                      <option value="">All</option>
                      <option value="Pending">Pending</option>
                      <option value="Inprogress">Inprogress</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* End Header */}
              {/* Table */}
              <Tasks />
              {/* End Table */}
            </div>
          </div>
        </div>
      </div>
      {/* End Card */}
    </div>
  );
}
