import { videos } from "./mock-data";
import type { AthleteProfile, TrainingVideo } from "./types";

export function getRecommendedVideos(profile: AthleteProfile, limit = 6): TrainingVideo[] {
  return [...videos]
    .map((video) => ({
      video,
      score:
        (video.disciplines.includes(profile.discipline) ? 4 : 0) +
        (video.goals.includes(profile.goal) ? 3 : 0) +
        (video.level === profile.level ? 2 : 0) +
        (profile.favorites.includes(video.id) ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ video }) => video);
}
