import { CalendarIcon, ChartBarSquareIcon, Cog8ToothIcon, ServerIcon, SwatchIcon, UserGroupIcon } from '@heroicons/react/24/outline'

function SideBar(props) {
  return (
    <div className="fixed inset-y-0 left-0 bg-white w-40">
      <h1 className="flex items-center justify-center text-xl h-16 bg-teal-600 text-white font-bold">Build It Right</h1>

      <ul className='flex flex-col text-lg h-full'>
        <li className='flex justify-center items-center flex-col py-7 text-stone-500'>
          <UserGroupIcon className="w-7 h-7" />
          Manage
        </li>
        <li className='flex justify-center items-center flex-col py-7 border-l-4 border-teal-500 text-teal-500 font-bold'>
          {/* <ServerIcon className="w-7 h-7 text-teal-500" />
          Boards */}
          <SwatchIcon className='w-7 h-7 text-teal-500' /> Leads
        </li>
        <li className='flex justify-center items-center flex-col py-7 text-stone-500'>
          <CalendarIcon className="w-7 h-7" />
          Schedule
        </li>
        <li className='flex justify-center items-center flex-col py-7 text-stone-500'>
          <ChartBarSquareIcon className="w-7 h-7" />
          Report
        </li>
        <li className='flex justify-center items-center flex-col py-7 text-stone-500 mt-auto mb-16'>
          <Cog8ToothIcon className="w-7 h-7" />
          Settings
        </li>
      </ul>
    </div>
  )
}

export default SideBar;