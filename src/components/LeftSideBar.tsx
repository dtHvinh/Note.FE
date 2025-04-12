'use client'

import { routes } from "@/utils/constants";
import { Home, Inbox, Search } from "lucide-react";
import Link from "next/link";
import UserDocument from "./UserDocument";

export default function LeftSideBar() {
    return (
        <div className="w-64 bg-[#1E1E1E] border-r border-[#333333] flex flex-col overflow-auto">
            <div className="p-2 
                [&_.nav-item]:px-3 
                [&_*]:text-ellipsis 
                [&_*]:font-bold
                [&_.section-title]:px-3"
            >
                <div className="flex items-center space-x-2 p-2">
                    <img src="https://placehold.co/20x20" alt="Vinh Đặng's Notion icon" className="rounded-full" />
                    <span className="text-sm font-medium">Vinh Đặng's Notion</span>
                </div>
                <div className="mt-2">
                    <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                        <Search />
                        <span className="text-sm text-gray-400">Search</span>
                    </div>
                    <Link href={routes.home} className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                        <Home />
                        <span className="text-sm text-gray-400">Home</span>
                    </Link>
                    <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                        <Inbox />
                        <span className="text-sm text-gray-400">Inbox</span>
                    </div>
                </div>

                <UserDocument />

                <div className="text-xs text-gray-500 uppercase my-2">Shared</div>

                <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                    <i className="fas fa-users text-gray-400"></i>
                    <span className="text-sm text-gray-400">Pages that you share will go here</span>
                </div>
                <button className="bg-white text-black text-sm py-2 px-4 rounded mt-2 w-full">Start collaborating</button>

                <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                    <i className="fas fa-cog text-gray-400"></i>
                    <span className="text-sm text-gray-400">Settings</span>
                </div>
                <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                    <i className="fas fa-clone text-gray-400"></i>
                    <span className="text-sm text-gray-400">Templates</span>
                </div>
                <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                    <i className="fas fa-trash text-gray-400"></i>
                    <span className="text-sm text-gray-400">Trash</span>
                </div>
                <div className="flex items-center space-x-2 py-2 hover:bg-[#333333] rounded nav-item">
                    <i className="fas fa-user-plus text-gray-400"></i>
                    <span className="text-sm text-gray-400">Invite members</span>
                </div>
            </div>
        </div>
    )
}