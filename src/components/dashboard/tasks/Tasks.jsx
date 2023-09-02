export default function Tasks() {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th scope="col" className="pl-6 py-3 text-left">
            SL
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Task Name
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Assignee
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-center">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Due Date
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Priority
              </span>
            </div>
          </th>
          <th scope="col" className="px-6 py-3 text-left">
            <div className="flex justify-center items-center gap-x-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800">
                Status
              </span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
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
              <span className="text-sm text-gray-600">Streamlab</span>
            </div>
          </td>
          {/* assignee */}
          <td className="h-px w-px whitespace-nowrap text-center">
            <div className="px-4 py-2">
              <select name="HeadlineAct" id="HeadlineAct" className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                <option defaultValue hidden>Select</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
                <option value="BBK">B.B King</option>
                <option value="AK">Albert King</option>
                <option value="BG">Buddy Guy</option>
                <option value="EC">Eric Clapton</option>
              </select>
            </div>
          </td>
          {/* due data */}
          <td className="h-px w-px whitespace-nowrap text-center">
            <div className="text-center">
              <input type="date" name="" id="" className="rounded-md border-primary" />
            </div>
          </td>
          {/* priority */}
          <td className="h-px w-px whitespace-nowrap">
            <div>
              <select name="HeadlineAct" id="HeadlineAct" className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                <option defaultValue hidden>Select</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </td>
          {/* status */}
          <td className="h-px w-px whitespace-nowrap">
            <div className="px-4 py-2">
              <select name="HeadlineAct" id="HeadlineAct" className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm">
                <option defaultValue hidden>Select</option>
                <option value="JM">John Mayer</option>
                <option value="SRV">Stevie Ray Vaughn</option>
                <option value="JH">Jimi Hendrix</option>
                <option value="BBK">B.B King</option>
                <option value="AK">Albert King</option>
                <option value="BG">Buddy Guy</option>
                <option value="EC">Eric Clapton</option>
              </select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
