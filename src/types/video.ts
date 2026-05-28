export interface Video {
  id: number;
  title: string;
  description: string;
  cover: string;
  src: string;
  duration: string;
}

export interface VideosData {
  videos: Video[];
}
