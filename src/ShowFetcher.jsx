import { useEffect, useState } from "react";
import EpisodeView from "./EpisodeView";

function ShowFetcher() {
  const [episodes, setEpisodes] = useState([]);
  const [currentShowId, setShowId] = useState(107);

  useEffect(() => {
    const fetchShow = async () => {
      setEpisodes(
        await fetch(
          `https://api.tvmaze.com/shows/${currentShowId}/episodes`
        ).then((response) => response.json())
      );
    };
    fetchShow();
  }, [currentShowId]);

  return (
    <EpisodeView
      episodes={episodes}
      currentShowId={currentShowId}
      setShowId={setShowId}
    />
  );
}

export default ShowFetcher;
