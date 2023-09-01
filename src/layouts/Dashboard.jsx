import { Link, Outlet } from 'react-router-dom';
import Avatar from '../components/avatar/Avatar';
import Create from '../components/dashboard/create/Create';
import SidebarMenu from '../components/dashboard/sidebarMenu/SidebarMenu';

export default function Dashboard() {
  return (
    <div>
      {/* ========== HEADER ========== */}
      <header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-[48] w-full bg-primary border-b text-sm py-2.5 sm:py-4 lg:pl-64">
        <nav className="flex basis-full items-center w-full mx-auto px-4 sm:px-6 md:px-8" aria-label="Global">
          <div className="mr-5 lg:mr-0 lg:hidden">
            <Link className="flex-none text-xl font-semibold text-secondary whitespace-nowrap" href="/dashboard" aria-label="Brand">Task Fusion</Link>
          </div>
          {/* searchbox */}
          <div className="w-full flex gap-x-2 items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
            <div className="sm:hidden">
              <button type="button" className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-secondary text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs">
                <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </div>
            <div className="hidden sm:block">
              <label htmlFor="icon" className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                  <svg className="h-4 w-4 text-primary" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </div>
                <input type="text" id="icon" name="icon" className="py-2 px-4 pl-11 block w-full bg-secondary border-gray-200 shadow-sm placeholder:text-primary rounded-md text-sm focus:z-10 focus:border-primary focus:ring-primary" placeholder="Search here" />
              </div>
            </div>
            {/* avatar */}
            <Avatar />
          </div>
        </nav>
      </header>
      {/* ========== END HEADER ========== */}
      {/* ========== MAIN CONTENT ========== */}
      {/* Sidebar Toggle */}
      <div className="sticky top-0 inset-x-0 z-20 bg-secondary border-y px-4 sm:px-6 md:px-8 lg:hidden">
        <div className="flex items-center py-4">
          {/* Navigation Toggle */}
          <button type="button" className="text-primary hover:text-dark" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation">
            <span className="sr-only">Toggle Navigation</span>
            <svg className="w-5 h-5" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
          </button>
          {/* End Navigation Toggle */}
          {/* Breadcrumb */}
          <ol className="ml-3 flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
            <li className="flex items-center text-sm text-dark">
              Dashboard Layout
              <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-dark" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
              </svg>
            </li>
            <li className="text-sm font-semibold text-dark truncate" aria-current="page">
              Dashboard
            </li>
          </ol>
          {/* End Breadcrumb */}
        </div>
      </div>
      {/* End Sidebar Toggle */}
      {/* Sidebar */}
      <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[60] w-64 bg-primary pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 border-r border-dark">
        <div className="px-6">
          <Create />
        </div>
        <SidebarMenu />
      </div>
      {/* End Sidebar */}
      {/* Content */}
      <div className="w-full pt-2 px-4 sm:px-6 md:px-8 lg:pl-72">
        {/* Page Heading */}
        <Outlet />
        {/* End Page Heading */}
      </div>
      {/* End Content */}
      {/* ========== END MAIN CONTENT ========== */}
    </div>
  );
}
