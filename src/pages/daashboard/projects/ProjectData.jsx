import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TasksTable from '../../../components/dashboard/tasks/TasksTable';
import TaskModal from './TaskModal';

export default function ProjectData() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const { name, tasks, team } = project || {};

  useEffect(() => {
    const parsedProjectData = JSON.parse(localStorage.getItem('project-info')) || [];
    const filteredProject = parsedProjectData.find((p) => p.id === id);
    setProject(filteredProject);
  }, [localStorage, id]);

  return (
    <section>
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <span className="text-primary">Project</span>
          {' '}
          Overview
        </h2>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-primary">{name}</h2>
      </div>
      {/* tasks table */}
      {
        tasks?.length === 0
          ? (
            <div className="flex justify-center items-center mt-10">
              <div className="space-y-2 text-center">
                <h2 className="font-semibold text-xl">
                  No
                  {' '}
                  <span className="text-primary">Task</span>
                  {' '}
                  Found
                </h2>
                <TaskModal team={team} projectId={id} />
              </div>
            </div>
          ) : (
            <TasksTable />
          )
      }
    </section>
  );
}
