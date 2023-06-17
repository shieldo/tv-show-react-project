function ShowFilter({ setFilter }) {
  const filterShow =
    (term) =>
    ({ name, summary, genres }) => {
      if (term.trim().length === 0) {
        return true;
      }

      return [name, summary || "", ...(genres || [])].some((corpus) =>
        corpus.toLowerCase().includes(term.toLowerCase())
      );
    };

  return (
    <p id="show-filter">
      Filtering for{" "}
      <input
        type="search"
        onChange={(e) => setFilter(() => filterShow(e.target.value))}
      />
    </p>
  );
}

export default ShowFilter;
