import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='bg-new w-full p-2.5 flex justify-between'>
            <div className='flex gap-28'>
                <div className='flex gap-1 md:ml-5 items-center'>
                    <img src='/newlogo.png' alt='Logo' className='w-12 h-12' />
                    <img src='/newName.png' alt='Logo' className='h-14' />
                </div>
                <div className='flex text-white gap-7 font-semibold items-center'>

                    <div className='group relative h-full flex items-center'>
                        <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                            EVENTS
                        </button>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                            RANKINGS
                        </button>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                            NEWS
                        </button>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                    <div className='group relative h-full flex items-center'>
                        <button className="min-h-fit px-2.5 py-1 hover:bg-shade rounded-md duration-300">
                            FORUMS
                        </button>
                        <span className="absolute left-50 bottom-0 w-full h-0.5 bg-line scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                    </div>
                </div>
            </div>
            <Link to="/login">
                <div className='text-black flex md:mr-8 items-center'>
                    <button className='bg-red-500 h-fit rounded-lg px-2.5 py-1 font-semibold hover:bg-red-400 duration-500'>
                        LOGIN
                    </button>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
