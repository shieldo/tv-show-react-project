import parse from "html-react-parser";
import { episodeCode } from "./episodeUtils";

function EpisodeCard({ episode }) {
  const {
    name,
    image: { medium: image },
    summary,
    url,
  } = episode;
  return (
    <article id={`episode-${episodeCode(episode)}`}>
      <h2>
        {name} <span>{episodeCode(episode)}</span>
      </h2>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="extract">{parse(summary)}</div>
      <a href={url}>episode info on TVMaze.com</a>
    </article>
  );
}

export default EpisodeCard;
