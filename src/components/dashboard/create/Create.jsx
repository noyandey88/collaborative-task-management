import { PlusCircleIcon } from '@heroicons/react/20/solid';
import Button from '../../../ui/button/Button';
import ProjectModal from '../modals/projectModal/ProjectModal';
import TeamModal from '../modals/teamModal/TeamModal';

export default function Create() {
  return (
    <div className="hs-dropdown relative inline-flex">
      <Button id="hs-dropdown-basic" type="button" className="bg-secondary text-dark font-bold py-1 flex items-center gap-x-2">
        <span>Create</span>
        <PlusCircleIcon className="w-6 h-6" />
      </Button>
      <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-secondary shadow-md rounded-lg p-2" aria-labelledby="hs-dropdown-basic">
        <ProjectModal />
        <TeamModal />
      </div>
    </div>
  );
}
