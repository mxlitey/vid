import { useEffect, useRef } from "react";
import videojs from "video.js";
import type Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const videoElement = document.createElement("video-js");
    videoElement.classList.add("vjs-big-play-centered");
    videoRef.current.appendChild(videoElement);

    playerRef.current = videojs(videoElement, {
      controls: true,
      responsive: true,
      fluid: true,
      sources: [{ src, type: "video/mp4" }],
      poster: poster || "",
      preload: "auto",
      playbackRates: [0.5, 1, 1.5, 2],
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, poster]);

  return (
    <div
      data-vjs-player
      className="w-full rounded-lg overflow-hidden shadow-2xl shadow-red-900/20"
    >
      <div ref={videoRef} />
    </div>
  );
}
