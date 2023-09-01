import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';

export default function Trial() {
  const navigate = useNavigate();

  return (
    <section className="py-10 lg:py-40 bg-secondary">
      <div className="text-center space-y-4 container mx-auto px-2">
        <h1 className="text-4xl font-bold">
          Start Your
          {' '}
          <span className="text-primary">Free Trial</span>
          {' '}
          Today
        </h1>
        <div className="flex justify-center">
          <p className="max-w-6xl text-primary">
            Experience the future of efficient task management. Sign up today for our free trial and witness the transformable power of streamlined collaboration, organized tasks, and unmatched productivity. Elevate your teams potential with a risk-free trial that propels you towards success
          </p>
        </div>
        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <Button onClick={() => navigate('/dashboard')} className="flex gap-1 justify-center" type="button">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
