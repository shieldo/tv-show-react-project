import EpisodeCard from "./EpisodeCard";
import { getAllEpisodes } from "./episodes";

function EpisodeList() {
  const episodes = getAllEpisodes();
  return (
    <div id="episodes">
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </div>
  );
}

export default EpisodeList;
