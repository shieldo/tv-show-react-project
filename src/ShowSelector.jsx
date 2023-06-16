function ShowSelector({ currentShowId, setShowId, shows, unsetShow }) {
  return (
    <div className="show-selector">
      <p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            unsetShow();
          }}
        >
          Return to show list
        </a>
      </p>
      <select
        value={currentShowId}
        onChange={(e) => {
          const selectedShowId = e.target.selectedOptions[0].value;
          if (!selectedShowId) return;
          setShowId(selectedShowId);
        }}
      >
        {shows.map(({ id, name: showName }) => (
          <option value={id} key={id}>
            {showName}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ShowSelector;
