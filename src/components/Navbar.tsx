import { Search } from "lucide-react";
import { useVideoStore } from "@/store/videoStore";

export default function Navbar() {
  const { searchQuery, setSearchQuery } = useVideoStore();

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 shrink-0">
          <img src="/favicon.jpg" alt="Adcote" className="w-9 h-9 rounded-lg object-cover" />
          <span className="text-white font-bold text-xl tracking-tight">
            Adcote
          </span>
        </div>
        <div className="relative flex-1 min-w-0 mx-4 sm:mx-8 max-w-md">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索视频..."
            className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500/50 focus:bg-white/10 transition-all duration-200"
          />
        </div>
      </div>
    </nav>
  );
}
