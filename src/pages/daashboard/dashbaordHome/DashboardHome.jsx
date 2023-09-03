import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { StorageContext } from '../../../contexts/StorageProvider';
import { getGreeting } from '../../../lib/utils';

export default function DashboardHome() {
  const { user } = useContext(AuthContext);
  const { loggedInUserTeamInfo, projects } = useContext(StorageContext);
  const date = new Date();
  const greeting = getGreeting();

  // get the result of the task of current user
  const tasksCount = projects?.reduce((total, item) => {
    const assigneeTasks = item.tasks.filter((task) => task.assignee?.email === user?.email);
    return total + assigneeTasks.length;
  }, 0);

  // get the result of the task of current user
  const currentUserTasks = projects?.reduce((result, item) => {
    const assigneeTasks = item.tasks.filter((task) => task.assignee?.email === user?.email);
    return result.concat(assigneeTasks);
  }, []);

  return (
    <section className="space-y-2">
      {/* greetings */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl">
          <span className="text-xl">{date.toDateString()}</span>
          <br />
          {greeting}
          {', '}
          <span className="text-primary font-bold">{user?.displayName}</span>
        </h2>
      </div>
      {/* status */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 font-semibold">
          {tasksCount < 2 ? `${tasksCount} Task available` : `${tasksCount} Tasks available`}
          <span className="flex items-center gap-x-1">
            <span className="border-l border-gray-200 text-primary pl-2">
              {loggedInUserTeamInfo?.length < 2 ? `${loggedInUserTeamInfo?.length} Team available` : `${loggedInUserTeamInfo?.length} Teams available`}
            </span>
          </span>
        </div>
      </div>
      {/* tasks cards */}
      <div className="py-10 lg:py-4">
        <div className="mb-4">
          <h2 className="text-dark font-bold">Tasks:</h2>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Card */}
          {
            currentUserTasks?.length !== 0
              ? (
                currentUserTasks?.map((task) => (
                  <div key={task?.id} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
                    <div className="p-4 md:p-5">
                      <div className="flex justify-between items-center">
                        <div>
                          {/* task name */}
                          <h3 className="group-hover:text-primary font-semibold text-dark">
                            {task?.taskName}
                          </h3>
                          {/* task priority */}
                          <p className="text-sm text-gray-500">
                            Priority:
                            {' '}
                            <span className="text-primary">{task?.priority}</span>
                          </p>
                          {/* task due date */}
                          <p className="text-sm text-gray-500">
                            Due Date:
                            {' '}
                            {task?.dueDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-primary font-medium">
                  <h2>There is no Task available</h2>
                </div>
              )
          }
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* projects cards */}
      <div className="py-10 lg:py-4">
        <div className="mb-4">
          <h2 className="text-dark font-bold">Projects:</h2>
        </div>
        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
          {/* Card */}
          {
            projects?.length !== 0
              ? (
                projects?.map((project) => (
                  <div key={project?.id} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition">
                    <div className="p-4 md:p-5">
                      <div className="flex justify-between items-center">
                        <div>
                          {/* task name */}
                          <h3 className="group-hover:text-primary font-semibold text-dark">
                            {project?.name}
                          </h3>
                          {/* task priority */}
                          <p className="text-sm text-gray-500">
                            Creator:
                            {' '}
                            <span className="text-primary">{user?.displayName}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-primary font-medium">
                  <h2>There is no Projects available</h2>
                </div>
              )
          }
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
    </section>
  );
}
