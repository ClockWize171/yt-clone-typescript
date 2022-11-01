import * as React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs'
import { GiHamburger } from 'react-icons/gi'
import { IoAppsSharp } from 'react-icons/io5'


interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
    return (
        <div className="flex justify-between item-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 item-center text-2xl">
                <div>
                    <GiHamburger />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
