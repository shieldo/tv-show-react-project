import parse from "html-react-parser";
import questionMark from "./assets/question-mark.png";

function ShowCard({ show, selectShow }) {
  return (
    <li>
      <h2 onClick={selectShow}>{show.name}</h2>
      <img
        src={show.image ? show.image.medium : questionMark}
        alt={show.name}
      />
      <div className="description">{parse(show.summary || "")}</div>
      <details>
        <dl>
          <dt>Rated</dt>
          <dd>{show.rating.average}</dd>
          <dt>Genres</dt>
          <dd>{show.genres.join(" | ")}</dd>
          <dt>Status</dt>
          <dd>{show.status}</dd>
          <dt>Runtime</dt>
          <dd>{show.runtime} minutes</dd>
        </dl>
      </details>
    </li>
  );
}

export default ShowCard;
