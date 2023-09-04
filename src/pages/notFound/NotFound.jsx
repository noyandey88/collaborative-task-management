import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../../ui/button/Button';

export default function NotFound() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <main className="grid min-h-full mt-10 rounded-md place-items-center bg-white/40 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-slate-900">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          <em>{error.statusText || error.message}</em>
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 space-x-4">
          <Button onClick={() => navigate('/')}>Go back home</Button>
        </div>
      </div>
    </main>
  );
}
