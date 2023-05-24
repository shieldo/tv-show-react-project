import parse from "html-react-parser";

function EpisodeCard({ episode }) {
  const {
    name,
    image: { medium: image },
    summary,
    url,
  } = episode;
  return (
    <article>
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

function episodeCode({ season, number }) {
  return `S${padToTwoDigits(season)}E${padToTwoDigits(number)}`;
}

function padToTwoDigits(number) {
  return number.toString().padStart(2, "0");
}

export default EpisodeCard;
