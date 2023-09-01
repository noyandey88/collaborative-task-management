import { useNavigate } from 'react-router-dom';
import Button from '../../ui/button/Button';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-10 md:pb-24">
        {/* Announcement Banner */}
        <div className="flex justify-center">
          <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 font-semibold" href="/">
            Explore the Capital Product
            <span className="flex items-center gap-x-1">
              <span className="border-l border-gray-200 text-primary pl-2">Explore</span>
              <svg className="w-2.5 h-2.5 text-primary" width={16} height={16} viewBox="0 0 16 16" fill="none">
                <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </span>
          </a>
        </div>
        {/* End Announcement Banner */}
        {/* Title */}
        <div className="mt-5 text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            Elevate Team Success
            {' '}
            <br />
            Perfect
            {' '}
            <span className="text-primary">Task Management</span>
          </h1>
        </div>
        {/* End Title */}
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600">
            Streamline teamwork and boost productivity with our intuitive task management app. Collaborate seamlessly, conquer tasks effortlessly, and achieve more together
          </p>
        </div>
        {/* Buttons */}
        <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
          <Button onClick={() => navigate('/dashboard')} className="flex gap-1 justify-center" type="button">
            Get Started
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Button>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
}
