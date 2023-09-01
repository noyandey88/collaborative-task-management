import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import ProfileModal from '../dashboard/modals/profileModal/ProfileModal';

export default function Avatar() {
  const {
    user, logoutUser, setLoading,
  } = useContext(AuthContext);

  // logout the existing user
  const handleLogout = () => {
    logoutUser()
      .then(() => {
        setLoading(false);
        toast.success('Logout Successful');
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  return (
    <div className="flex flex-row items-center justify-end gap-2">
      <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
        <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-secondary text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs">
          <img className="inline-block h-[2.375rem] w-[2.375rem] object-cover rounded-full ring-2 ring-white dark:ring-gray-800" src={user?.photoURL} alt="profile" />
        </button>
        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-with-header">
          <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg">
            <p className="text-sm text-gray-500">Logged in as</p>
            <p className="text-sm font-medium text-primary">{user?.email}</p>
          </div>
          <div className="mt-2 py-2 first:pt-0 last:pb-0">
            <ProfileModal />
            {/* logout */}
            <button onClick={handleLogout} type="button" className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
