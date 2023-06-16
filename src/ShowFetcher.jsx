import { useEffect, useState } from "react";
import EpisodeView from "./EpisodeView";

function ShowFetcher({ currentShowId, setShowId, ...rest }) {
  const [episodes, setEpisodes] = useState([]);

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
      {...rest}
    />
  );
}

export default ShowFetcher;
