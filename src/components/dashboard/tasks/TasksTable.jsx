import TaskModal from '../../../pages/daashboard/projects/TaskModal';
import Tasks from './Tasks';

export default function TasksTable({ team, projectId }) {
  return (
    <div className="py-10 lg:py-14">
      {/* Card */}
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b">
                <div className="flex items-center gap-x-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Tasks
                  </h2>
                  <TaskModal team={team} projectId={projectId} />
                </div>
                {/* filter */}
                <div>
                  <div className="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                    <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                      <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      Filter
                    </button>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-20 bg-white shadow-md rounded-lg" aria-labelledby="hs-as-table-table-filter-dropdown">
                      <div className="divide-y divide-gray-200">
                        <label htmlFor="hs-as-filters-dropdown-frequency" className="flex py-2.5 px-3">
                          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-as-filters-dropdown-frequency" defaultChecked />
                          <span className="ml-3 text-sm text-gray-800">Frequency</span>
                        </label>
                        <label htmlFor="hs-as-filters-dropdown-status" className="flex py-2.5 px-3">
                          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-as-filters-dropdown-status" defaultChecked />
                          <span className="ml-3 text-sm text-gray-800">Status</span>
                        </label>
                        <label htmlFor="hs-as-filters-dropdown-created" className="flex py-2.5 px-3">
                          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-as-filters-dropdown-created" />
                          <span className="ml-3 text-sm text-gray-800">Created</span>
                        </label>
                        <label htmlFor="hs-as-filters-dropdown-due-date" className="flex py-2.5 px-3">
                          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-as-filters-dropdown-due-date" />
                          <span className="ml-3 text-sm text-gray-800">Due Date</span>
                        </label>
                        <label htmlFor="hs-as-filters-dropdown-amount" className="flex py-2.5 px-3">
                          <input type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-as-filters-dropdown-amount" />
                          <span className="ml-3 text-sm text-gray-800">Amount</span>
                        </label>
                      </div>
                    </div>
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
