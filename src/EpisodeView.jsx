import { useState } from "react";
import EpisodeList from "./EpisodeList";
import SearchBar from "./SearchBar";

function EpisodeView({ episodes }) {
  const [searchTerm, setSearchTerm] = useState("");

  const totalEpisodeCount = episodes.length;

  const filteredEpisodes = episodes.filter(({ name, summary }) => {
    if (searchTerm.trim().length === 0) {
      return true;
    }

    return [name, summary].some((corpus) =>
      corpus.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        totalEpisodeCount={totalEpisodeCount}
        currentEpisodeCount={filteredEpisodes.length}
      />
      <EpisodeList episodes={filteredEpisodes} />
    </>
  );
}

export default EpisodeView;
