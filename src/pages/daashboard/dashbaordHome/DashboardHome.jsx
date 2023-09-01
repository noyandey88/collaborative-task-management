import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { getGreeting } from '../../../lib/utils';

export default function DashboardHome() {
  const { user } = useContext(AuthContext);
  const date = new Date();
  const greeting = getGreeting();
  return (
    <section className="space-y-2">
      {/* greetings */}
      <div className="text-center">
        <h2 className="text-3xl">
          <span className="text-xl">{date.toDateString()}</span>
          <br />
          {greeting}
          {', '}
          {user?.displayName}
        </h2>
      </div>
      {/* status */}
      {/* Announcement Banner */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 font-semibold">
          0 Task available
          <span className="flex items-center gap-x-1">
            <span className="border-l border-gray-200 text-primary pl-2">
              0 Team available
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
