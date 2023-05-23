import parse from "html-react-parser";

function EpisodeCard({ episode }) {
  const {
    name,
    season,
    number,
    image: { medium: image },
    summary,
    url,
  } = episode;
  return (
    <article>
      <h2>
        {name} <span>{episodeCode(season, number)}</span>
      </h2>
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="extract">{parse(summary)}</div>
      <a href={url}>episode info on TVMaze.com</a>
    </article>
  );
}

function episodeCode(seasonNumber, episodeNumber) {
  return `S${padToTwoDigits(seasonNumber)}E${padToTwoDigits(episodeNumber)}`;
}

function padToTwoDigits(number) {
  return number.toString().padStart(2, "0");
}

export default EpisodeCard;
