import { create } from "zustand";
import type { Video } from "@/types/video";

interface VideoStore {
  videos: Video[];
  searchQuery: string;
  currentVideo: Video | null;
  setVideos: (videos: Video[]) => void;
  setSearchQuery: (query: string) => void;
  setCurrentVideo: (video: Video | null) => void;
  filteredVideos: () => Video[];
}

export const useVideoStore = create<VideoStore>((set, get) => ({
  videos: [],
  searchQuery: "",
  currentVideo: null,
  setVideos: (videos) => set({ videos }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setCurrentVideo: (currentVideo) => set({ currentVideo }),
  filteredVideos: () => {
    const { videos, searchQuery } = get();
    if (!searchQuery.trim()) return videos;
    const q = searchQuery.toLowerCase();
    return videos.filter(
      (v) =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
    );
  },
}));
