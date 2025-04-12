import { File, Plus } from "lucide-react";
import { Tooltip } from "./ui/tooltip";

interface Document {
    icon: React.ComponentType;
    title: string;
    id: string;
}

export default function UserDocument() {
    return (
        <>
            <div className="text-xs flex items-center justify-between text-gray-500 uppercase my-2 section-title">
                <span>Private</span>
                <Tooltip content={'aadd'}>
                    <span><Plus size={16} /></span>
                </Tooltip>
            </div>

            <div className="flex items-center space-x-2 py-2 bg-[#333333] rounded nav-item">
                <File size={17} />
                <span className="text-sm text-white">English</span>
            </div>
        </>
    )
}