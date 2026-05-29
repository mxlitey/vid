import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import VideoCard from "@/components/VideoCard";
import { useVideoStore } from "@/store/videoStore";
import type { VideosData } from "@/types/video";

export default function Home() {
  const { videos, setVideos, filteredVideos, searchQuery } = useVideoStore();

  useEffect(() => {
    if (videos.length > 0) return;
    fetch("/videos.json")
      .then((res) => res.json())
      .then((data: VideosData) => setVideos(data.videos))
      .catch((err) => console.error("Failed to load videos:", err));
  }, [videos.length, setVideos]);

  const displayVideos = filteredVideos();

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main className="container mx-auto px-6 py-8">
        <h2 className="text-gray-400 text-sm font-medium mb-6 tracking-wide">上海阿德科特学校 新AS年级选课</h2>

        {displayVideos.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <svg
                className="w-10 h-10 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              {searchQuery
                ? `未找到与 "${searchQuery}" 相关的视频`
                : "暂无视频内容"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </main>
      <footer className="border-t border-white/5 py-6 mt-8">
        <p className="text-center text-gray-500 text-sm">
          设计与开发由{" "}
          <a
            href="https://github.com/mxlitey/vid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            mxlitey
          </a>
        </p>
      </footer>
    </div>
  );
}
