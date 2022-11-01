/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
    mainLinks,
    secondaryLinks,
    helpLinks,
    subscriptionLinks,
    textLinks
} from './SidebarIcons';

interface ISidebarProps {
    toggleSidebar: boolean,
}

const Sidebar: React.FunctionComponent<ISidebarProps> = ({ toggleSidebar }) => {
    return (
        <div style={{ display: toggleSidebar ? 'none' : '' }} 
        className='w-2/12 bg-[#0f0f0f] pr-5 overflow-auto pb-8 sidebar'>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {mainLinks.map(({ icon, name }) => (
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-500 ${name === 'Home' ? "bg-slate-600" : ""}`}>
                        <a href="#" className='flex items-center gap-5'>
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {secondaryLinks.map(({ icon, name }) => (
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-500 ${name === 'Home' ? "bg-slate-600" : ""}`}>
                        <a href="#" className='flex items-center gap-5'>
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {helpLinks.map(({ icon, name }) => (
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-500 ${name === 'Home' ? "bg-slate-600" : ""}`}>
                        <a href="#" className='flex items-center gap-5'>
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700">
                {subscriptionLinks.map(({ icon, name }) => (
                    <li key={name}
                        className={`pl-6 py-3 hover:bg-zinc-500 ${name === 'Home' ? "bg-slate-600" : ""}`}>
                        <a href="#" className='flex items-center gap-5'>
                            {icon}
                            <span className="text-sm tracking-wider">
                                {name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
            <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
                {textLinks[0].map((name) => (
                    <li key={name}>
                        {name}
                    </li>
                ))}
            </ul>
            <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
                {textLinks[1].map((name) => (
                    <li key={name}>
                        {name}
                    </li>
                ))}
            </ul>
            <span className='px-4 text-sm text-zinc-400'>
                &copy; 2022 Google
            </span>
            <br />
            <p className="px-4 pt-3 text-sm text-zinc-400">
                This is YouTube Clone for Educational Purpose.
            </p>
        </div>
    );
};

export default Sidebar;
