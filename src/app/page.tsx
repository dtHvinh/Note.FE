
import RecentlyVisited from "@/components/RecentlyVisited";

export default function Home() {
  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-semibold mb-6 text-center">Good morning, Vinh Đặng</h1>

      <RecentlyVisited />

      <div className="mb-8">
        <div className="flex items-center mb-3">
          <i className="fas fa-graduation-cap mr-2 text-gray-500"></i>
          <span className="text-gray-500">Learn</span>
        </div>
        <div className="flex space-x-4">
          <div className="bg-[#3F3F40] rounded-lg p-4 w-64">
            <img src="https://placehold.co/240x135" alt="The ultimate guide to Notion templates" className="mb-2 rounded-md" />
            <h3 className="text-sm font-medium">The ultimate guide to Notion templates</h3>
            <p className="text-xs text-gray-500 mt-1"><i className="far fa-file-alt mr-1"></i>5m read</p>
          </div>
          <div className="bg-[#3F3F40] rounded-lg p-4 w-64">
            <img src="https://placehold.co/240x135" alt="Customize & style your content" className="mb-2 rounded-md" />
            <h3 className="text-sm font-medium">Customize & style your content</h3>
            <p className="text-xs text-gray-500 mt-1"><i className="far fa-file-alt mr-1"></i>9m read</p>
          </div>
          <div className="bg-[#3F3F40] rounded-lg p-4 w-64">
            <img src="https://placehold.co/240x135" alt="Getting started with projects and tasks" className="mb-2 rounded-md" />
            <h3 className="text-sm font-medium">Getting started with projects and tasks</h3>
            <p className="text-xs text-gray-500 mt-1"><i className="far fa-file-alt mr-1"></i>8m read</p>
          </div>
          <div className="bg-[#3F3F40] rounded-lg p-4 w-64">
            <img src="https://placehold.co/240x135" alt="Using Notion AI to your impact" className="mb-2 rounded-md" />
            <h3 className="text-sm font-medium">Using Notion AI to your impact</h3>
            <p className="text-xs text-gray-500 mt-1"><i className="far fa-file-alt mr-1"></i>3m read</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-3">
          <i className="far fa-calendar mr-2 text-gray-500"></i>
          <span className="text-gray-500">Upcoming events</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#3F3F40] rounded-lg p-4">
            <i className="far fa-calendar-alt text-3xl mb-2 text-gray-400"></i>
            <p className="text-sm">See your upcoming events and join meetings from Home.</p>
            <a href="#" className="text-blue-500 text-sm mt-2 block">Connect Notion Calendar</a>
          </div>
          <div className="bg-[#3F3F40] rounded-lg p-4">
            <p className="text-xs text-gray-500">Today</p>
            <p className="text-xs text-gray-500">Apr 11</p>
            <h3 className="text-sm font-medium">My first meeting</h3>
            <p className="text-xs text-gray-500">9 AM · Office</p>
            <h3 className="text-sm font-medium">Lunch</h3>
            <p className="text-xs text-gray-500">1 PM · Restaurant</p>
            <button className="bg-[#505051] text-white rounded-md px-2 py-1 text-xs mt-2"><i className="fas fa-video mr-1"></i>Join meeting</button>
          </div>
          <div className="bg-[#3F3F40] rounded-lg p-4">
            <p className="text-xs text-gray-500">Sat</p>
            <p className="text-xs text-gray-500">Apr 12</p>
            <h3 className="text-sm font-medium">Grocery shopping</h3>
            <p className="text-xs text-gray-500">11 AM · Store</p>
            <h3 className="text-sm font-medium">Birthday celebration</h3>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex items-center mb-3">
          <i className="fas fa-home mr-2 text-gray-500"></i>
          <span className="text-gray-500">Home views</span>
        </div>
      </div>

      <div className="fixed bottom-4 right-4 bg-[#3F3F40] rounded-full w-12 h-12 flex items-center justify-center">
        <i className="fas fa-user text-xl"></i>
      </div>
    </div>
  );
}
