import * as React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { BsCameraVideo, BsBell } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoAppsSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import youtube from '../../assets/youtube.png'


interface INavbarProps {
    setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>,
    toggleSidebar: boolean
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ setToggleSidebar, toggleSidebar }) => {

    const [inputFlag, setInputFlag] = React.useState(false)

    return (
        <div className="flex justify-between items-center px-14 h-14 bg-[#0f0f0f] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl">
                <div className='cursor-pointer'>
                    <GiHamburgerMenu onClick={() => setToggleSidebar(!toggleSidebar)} />
                </div>
                <Link to='/'>
                    <div className="flex gap-1 items-center justify-center">
                        <img src={youtube} className='w-9 h-9 items-center' alt='youtube-icon' />
                        <span className='text-xl font-medium items-center'>YouTube</span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form action="">
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full">
                        <div className="flex gap-4 item-center pr-5">
                            {inputFlag ?
                                <div>
                                    <AiOutlineSearch className='text-xl my-1' />
                                </div>
                                :
                                null
                            }

                            <input type="text" onFocus={() => setInputFlag(true)} onBlur={() => setInputFlag(false)} className='w-96 bg-zinc-900 focus:outline-none border-none' />
                            <AiOutlineClose className='text-xl my-1 cursor-pointer' />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 rounded-r-full'>
                            <AiOutlineSearch className='text-xl' />
                        </button>
                    </div>
                </form>
                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                    <TiMicrophone />
                </div>
            </div>
            <div className="flex gap-5 items-center text-xl">
                <BsCameraVideo />
                <IoAppsSharp />
                <div className='relative'>
                    <BsBell />
                    <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>
                        9+
                    </span>
                </div>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    className='w-9 h-9 rounded-full'
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default Navbar;
