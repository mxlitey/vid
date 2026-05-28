import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Film } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { useVideoStore } from "@/store/videoStore";
import type { VideosData } from "@/types/video";

export default function Play() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { videos, currentVideo, setCurrentVideo, setVideos } = useVideoStore();

  useEffect(() => {
    if (videos.length === 0) {
      fetch("/videos.json")
        .then((res) => res.json())
        .then((data: VideosData) => {
          setVideos(data.videos);
          const found = data.videos.find((v) => v.id === Number(id));
          setCurrentVideo(found || null);
        })
        .catch((err) => console.error("Failed to load videos:", err));
    } else {
      const found = videos.find((v) => v.id === Number(id));
      setCurrentVideo(found || null);
    }
    return () => setCurrentVideo(null);
  }, [id, videos, setVideos, setCurrentVideo]);

  const relatedVideos = videos.filter((v) => v.id !== Number(id));

  if (!currentVideo) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Film size={28} className="text-gray-600" />
          </div>
          <p className="text-gray-500">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <nav className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 text-sm"
          >
            <ArrowLeft size={18} />
            <span>返回列表</span>
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-w-0">
            <VideoPlayer src={currentVideo.src} poster={currentVideo.cover} />
            <div className="mt-5">
              <h1 className="text-2xl font-bold text-white leading-tight">
                {currentVideo.title}
              </h1>
              <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                {currentVideo.description}
              </p>
            </div>
          </div>

          <aside className="lg:w-80 shrink-0">
            <h2 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <div className="w-1 h-4 bg-red-600 rounded-full" />
              其他课程
            </h2>
            <div className="space-y-3">
              {relatedVideos.map((video) => (
                <div
                  key={video.id}
                  onClick={() => navigate(`/play/${video.id}`)}
                  className="flex gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/5 transition-colors duration-200 group"
                >
                  <div className="relative w-32 shrink-0 aspect-video rounded-md overflow-hidden">
                    <img
                      src={video.cover}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 py-0.5">
                    <h3 className="text-white text-sm font-medium line-clamp-2 group-hover:text-red-400 transition-colors duration-200">
                      {video.title}
                    </h3>
                    <p className="text-gray-500 text-xs mt-1 line-clamp-1">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
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
