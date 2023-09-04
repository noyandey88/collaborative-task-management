import { useContext } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import TeamModal from '../modals/teamModal/TeamModal';
import Team from './Team';

export default function Teams() {
  const { teams } = useContext(StorageContext);
  return (
    <ul className="mt-2 space-y-1 px-4">
      {
        teams && teams?.length !== 0
          ? (
            teams?.map((team) => <Team key={team.id} team={team} />)
          ) : (
            <div className="pb-2 space-y-2 text-center">
              <h2 className="text-secondary font-medium">No Projects Here</h2>
              <TeamModal list />
            </div>
          )
      }
    </ul>
  );
}
