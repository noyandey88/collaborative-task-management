import { Link } from 'react-router-dom';

export default function Team({ team }) {
  const { id, name } = team || {};
  return (
    <li>
      <Link to={`/dashboard/teams/${id}`} className="block rounded-lg px-4 py-2 text-sm font-medium text-secondary hover:bg-secondary hover:text-primary">
        {name}
      </Link>
    </li>
  );
}
