import { useEffect, useState } from "react";
import EpisodeView from "./EpisodeView";

function ShowFetcher() {
  const [episodes, setEpisodes] = useState([]);
  const showId = 107;

  useEffect(() => {
    const fetchShow = async () => {
      setEpisodes(
        await fetch(`https://api.tvmaze.com/shows/${showId}/episodes`).then(
          (response) => response.json()
        )
      );
    };
    fetchShow();
  }, []);

  return <EpisodeView episodes={episodes} />;
}

export default ShowFetcher;
