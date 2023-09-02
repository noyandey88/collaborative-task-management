import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProjectData() {
  const { id } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const parsedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    const filteredProject = parsedProjectData.find((p) => p.id === id);
    setProject(filteredProject);
  }, [localStorage, id]);

  return (
    <div>{project?.name}</div>
  );
}
