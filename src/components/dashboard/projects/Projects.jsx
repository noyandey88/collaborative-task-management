import { useContext } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import ProjectModal from '../modals/projectModal/ProjectModal';
import Project from './Project';

export default function Projects() {
  const { projects } = useContext(StorageContext);
  return (
    <ul className="mt-2 space-y-1 px-4">
      {
        projects && projects?.length !== 0
          ? (
            projects?.map((project) => <Project key={project.id} project={project} />)
          ) : (
            <div className="pb-2 space-y-2 text-center">
              <h2 className="text-secondary font-medium">No Projects Here</h2>
              <ProjectModal list />
            </div>
          )
      }
    </ul>
  );
}
