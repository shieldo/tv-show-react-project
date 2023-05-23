import { getAllEpisodes as getEpisodes } from "./episodes";

function EpisodeCount() {
  const episodes = getEpisodes();
  return <>Got {episodes.length} episode(s)</>;
}

export default EpisodeCount;
