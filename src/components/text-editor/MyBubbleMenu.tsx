import { Editor } from "@tiptap/react";
import { Bold, ChevronDown, Code, Heading, Heading1, Heading2, Heading3, Italic, Strikethrough } from "lucide-react";
import { useState } from "react";

export default function MyBubbleMenu({ editor }: { editor: Editor }) {
    const [showHeadingMenu, setShowHeadingMenu] = useState(false);

    if (!editor)
        return null;

    return (
        <div className="flex items-center bg-white dark:bg-[#202124] text-dark dark:text-white text-sm absolute 
                        [&_*]:text-nowrap [&_*]:transition-colors 
                        px-5
                        p-2 rounded-full space-x-1
                        mt-10">
            <div className="relative">
                <button
                    onClick={() => setShowHeadingMenu(!showHeadingMenu)}
                    className={`flex items-center px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${editor.isActive('heading') ? 'bg-gray-200 dark:bg-gray-700' : ''
                        }`}>
                    <Heading size={16} />
                    <span className="ml-1">
                        <ChevronDown size={16} />
                    </span>
                </button>
                {showHeadingMenu && (
                    <div className="absolute top-full left-0 mt-1 bg-white dark:bg-[#202124] rounded-lg shadow-lg py-1 min-w-[120px]">
                        <button
                            onClick={() => {
                                editor.chain().focus().toggleHeading({ level: 1 }).run();
                                setShowHeadingMenu(false);
                            }}
                            className={`w-full flex items-center px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200 dark:bg-gray-700' : ''
                                }`}>
                            <Heading1 size={16} />
                            <span className="ml-2">Heading 1</span>
                        </button>
                        <button
                            onClick={() => {
                                editor.chain().focus().toggleHeading({ level: 2 }).run();
                                setShowHeadingMenu(false);
                            }}
                            className={`w-full flex items-center px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 dark:bg-gray-700' : ''
                                }`}>
                            <Heading2 size={16} />
                            <span className="ml-2">Heading 2</span>
                        </button>
                        <button
                            onClick={() => {
                                editor.chain().focus().toggleHeading({ level: 3 }).run();
                                setShowHeadingMenu(false);
                            }}
                            className={`w-full flex items-center px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-800 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200 dark:bg-gray-700' : ''
                                }`}>
                            <Heading3 size={16} />
                            <span className="ml-2">Heading 3</span>
                        </button>
                    </div>
                )}
            </div>
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`flex items-center px-2 py-1 font-bold hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${editor.isActive('bold') ? 'bg-gray-200 dark:bg-gray-700' : ''
                    }`}>
                <Bold size={16} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`flex items-center px-2 py-1 italic hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${editor.isActive('italic') ? 'bg-gray-200 dark:bg-gray-700' : ''
                    }`}>
                <Italic size={16} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`flex items-center px-2 py-1 line-through hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${editor.isActive('strike') ? 'bg-gray-200 dark:bg-gray-700' : ''
                    }`}>
                <Strikethrough size={16} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`flex items-center px-2 py-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded ${editor.isActive('code') ? 'bg-gray-200 dark:bg-gray-700' : ''
                    }`}>
                <Code size={16} />
            </button>
        </div>
    )
}