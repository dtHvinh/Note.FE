interface RecentItem {
    icon: string;
    title: string;
    timeAgo: string;
}

const recentItems: RecentItem[] = [
    {
        icon: "fas fa-file-alt",
        title: "English",
        timeAgo: "25m ago"
    },
    {
        icon: "fas fa-robot",
        title: "AI Prompt Box",
        timeAgo: "2d ago"
    },
    {
        icon: "fas fa-book-open",
        title: "Getting Started",
        timeAgo: "Nov 9, 2024"
    },
    {
        icon: "fas fa-list-ul",
        title: "Reading List",
        timeAgo: "Nov 9, 2024"
    },
    {
        icon: "fas fa-flask",
        title: "Brave New World",
        timeAgo: "Nov 9, 2024"
    },
    {
        icon: "fas fa-dragon",
        title: "The Girl with Dragon Tatto",
        timeAgo: "Nov 9, 2024"
    }
];

export default function RecentlyVisited() {
    return (
        <div className="mb-8">
            <div className="flex items-center mb-3">
                <i className="fas fa-history mr-2 text-gray-500"></i>
                <span className="text-gray-500">Recently visited</span>
            </div>
            <div className="flex space-x-4">
                {recentItems.map((item, index) => (
                    <div key={index} className="bg-[#2f2f38] rounded-lg p-4 w-32">
                        <i className={`${item.icon} text-xl mb-2 text-gray-400`}></i>
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-xs text-gray-500 mt-1">{item.timeAgo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}