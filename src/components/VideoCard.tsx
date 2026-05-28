import { Clock, Play } from "lucide-react";
import type { Video } from "@/types/video";
import { useNavigate } from "react-router-dom";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/play/${video.id}`)}
      className="group cursor-pointer rounded-xl overflow-hidden bg-[#1a1a2e] border border-white/5 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-red-900/30 hover:border-red-500/20"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={video.cover}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
          <Clock size={12} />
          <span>{video.duration}</span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-red-600/90 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-red-600/50">
            <Play size={24} className="text-white ml-1" fill="white" />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold text-sm truncate group-hover:text-red-400 transition-colors duration-200">
          {video.title}
        </h3>
        <p className="text-gray-400 text-xs mt-1 line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  );
}
