import EpisodeCard from "./EpisodeCard";

function EpisodeList({ episodes }) {
  return (
    <div id="episodes">
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </div>
  );
}

export default EpisodeList;
