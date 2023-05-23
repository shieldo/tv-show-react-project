function SearchBar({
  searchTerm,
  setSearchTerm,
  totalEpisodeCount,
  currentEpisodeCount,
}) {
  return (
    <nav>
      <input
        type="search"
        value={searchTerm}
        aria-label="search-term"
        onInput={(e) => setSearchTerm(e.target.value)}
      />
      <p>
        Displaying{" "}
        <span className="current-count">{currentEpisodeCount || "?"}</span>/
        <span className="total-count">{totalEpisodeCount || "?"}</span>
      </p>
    </nav>
  );
}

export default SearchBar;
