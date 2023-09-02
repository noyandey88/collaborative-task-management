import { useContext } from 'react';
import { StorageContext } from '../../../contexts/StorageProvider';
import Project from './Project';

export default function Projects() {
  const { projects } = useContext(StorageContext);
  return (
    <ul className="mt-2 space-y-1 px-4">
      {
        projects?.map((project) => <Project key={project.id} project={project} />)
      }
    </ul>
  );
}
