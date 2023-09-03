import { useContext } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import TaskModal from '../../../pages/daashboard/projects/TaskModal';
import Tasks from './Tasks';

export default function TasksTable({ team, projectId }) {
  const { filterTitle, setFilterTitle } = useContext(StorageContext);
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
                      Sort
                    </label>
                    <select name="HeadlineAct" id="HeadlineAct" className="w-full mt-1 rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                      <option value>Please select</option>
                      <option value="JM">John Mayer</option>
                      <option value="SRV">Stevie Ray Vaughn</option>
                      <option value="JH">Jimi Hendrix</option>
                      <option value="BBK">B.B King</option>
                      <option value="AK">Albert King</option>
                      <option value="BG">Buddy Guy</option>
                      <option value="EC">Eric Clapton</option>
                    </select>
                  </div>
                  {/* filter */}
                  <div>
                    <label htmlFor="HeadlineAct" className="block text-sm font-medium text-gray-900">
                      Filter
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
