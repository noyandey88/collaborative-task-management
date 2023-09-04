import { Link } from 'react-router-dom';

export default function Project({ project }) {
  const { id, name } = project || {};
  return (
    <li>
      <Link to={`/dashboard/projects/${id}`} className="block rounded-lg px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary hover:text-primary">
        {name}
      </Link>
    </li>
  );
}
