import { AtSymbolIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

function TopBar(props) {
  return (
    <div className="h-16 pl-40 fixed bg-gradient-to-r from-teal-500 to-teal-800 w-full flex items-center justify-between pr-5">
      <div className='flex px-5 items-center'>
        <MagnifyingGlassIcon className="w-5 h-5 text-white" />
        <input type="text" placeholder="Search for tasks ..." className='bg-transparent border-0 text-white placeholder-stone-200 outline-none focus:ring-0 text-lg'/>
      </div>
      <div className='flex space-x-5'>
        <AtSymbolIcon className='w-7 h-7 text-white' />
        <BellIcon className='w-7 h-7 text-white' />
        <div className='flex items-center text-white space-x-4'>
          <h3 className='font-bold mr-3'>M. John Doe</h3>
          <Image src="https://randomuser.me/api/portraits/men/75.jpg" width="36" height='36' objectFit='cover' className='rounded-full' alt="random user image"/>
        </div>
      </div>
    </div>
  )
}

export default TopBar;