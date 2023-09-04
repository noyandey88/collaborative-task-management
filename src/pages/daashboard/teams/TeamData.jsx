import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StorageContext } from '../../../contexts/StorageProvider';

export default function TeamData() {
  const { id } = useParams();
  const [team, setTeam] = useState({});
  const { teams } = useContext(StorageContext);
  const { projects } = team || {};

  useEffect(() => {
    const filteredTeam = teams.find((t) => t.id === id);
    setTeam(filteredTeam);
  }, [teams, id]);

  return (
    <section>
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          <span className="text-primary">Team</span>
          {' '}
          Overview
        </h2>
      </div>
      {/* team information */}
      <div className="text-xl">
        <h2>{team.name}</h2>
      </div>
      <div>
        {/* members */}
        <div className="mt-4">
          <h2>Team Members:</h2>
          <ul className="flex gap-4 mt-1">
            {team.members?.map((member) => (
              <li key={member.id} className="font-medium text-primary flex gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
                {member.name}
              </li>
            ))}
          </ul>
        </div>
        {/* projects */}
        <div className="mt-4">
          <h2>Projects:</h2>
          <ul className="flex flex-col gap-y-2 mt-1">
            {
              team.projects?.length === 0
                ? (
                  <div>
                    <h2 className="text-primary font-medium">No Projects have added</h2>
                  </div>
                ) : (
                  projects?.map((project, index) => (
                    <li key={index} className="font-medium text-primary flex gap-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                      {project}
                    </li>
                  ))
                )
            }
          </ul>
        </div>
      </div>
    </section>
  );
}
