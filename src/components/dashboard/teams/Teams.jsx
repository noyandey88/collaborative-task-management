import { useContext } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import Team from './Team';

export default function Teams() {
  const { loggedInUserTeamInfo } = useContext(StorageContext);
  return (
    <ul className="mt-2 space-y-1 px-4">
      {
        loggedInUserTeamInfo?.map((team) => <Team key={team.id} team={team} />)
      }
    </ul>
  );
}
