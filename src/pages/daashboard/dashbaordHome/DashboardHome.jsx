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
  const tasksCount = projects.reduce((total, item) => {
    const assigneeTasks = item.tasks.filter((task) => task.assignee?.email === user?.email);
    return total + assigneeTasks.length;
  }, 0);

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
    </section>
  );
}
