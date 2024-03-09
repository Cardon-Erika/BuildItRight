import { AtSymbolIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';

function BottomBar() {
  return (
    <div className="flex pl-40 h-16 bg-gradient-to-r from-teal-500 to-teal-800 w-full justify-center border-teal-100 border-t-2">
      <h5 className='flex items-center justify-center text-white'>Footer</h5>
    </div>
  )
}

export default BottomBar;