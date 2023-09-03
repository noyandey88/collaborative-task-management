export default function Task({ task }) {
  const {
    taskName, assignee, dueDate, priority, status,
  } = task || {};
  console.log('🚀 ~ file: Task.jsx:5 ~ Task ~ status:', status);

  return (
    <tr>
      {/* checkbox */}
      <td className="h-px w-px whitespace-nowrap">
        <div className="pl-6 py-3">
          <label htmlFor="hs-at-with-checkboxes-1" className="flex">
            <input type="checkbox" className="shrink-0 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500" id="hs-at-with-checkboxes-1" />
            <span className="sr-only">Checkbox</span>
          </label>
        </div>
      </td>
      {/* task name */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="px-6 py-3">
          <span className="text-sm text-gray-600">{taskName}</span>
        </div>
      </td>
      {/* assignee */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="px-4 py-2">
          {assignee?.name}
        </div>
      </td>
      {/* due data */}
      <td className="h-px w-px whitespace-nowrap text-center">
        <div className="text-center">
          {/* <input type="date" name="" id="" className="rounded-md border-primary" /> */}
          {dueDate}
        </div>
      </td>
      {/* priority */}
      <td className="h-px w-px whitespace-nowrap">
        <div>
          <select name="HeadlineAct" id="HeadlineAct" className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm" value={priority}>
            <option defaultValue hidden>Select</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </td>
      {/* status */}
      <td className="h-px w-px whitespace-nowrap">
        <div className="px-3 py-2">
          <select name="HeadlineAct" id="HeadlineAct" className="w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm" value={status}>
            <option defaultValue hidden>Select</option>
            <option value="Pending">Pending</option>
            <option value="Inprogress">Inprogress</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </td>
    </tr>
  );
}
