import { useState } from "react";
import ShowCard from "./ShowCard";
import ShowFilter from "./ShowFilter";

function ShowList({ shows, setShowId }) {
  const [filter, setFilter] = useState(() => () => true);

  return (
    <>
      <ShowFilter setFilter={setFilter} />
      <ol id="show-list">
        {shows.filter(filter).map((show) => (
          <ShowCard
            show={show}
            key={show.id}
            selectShow={() => setShowId(show.id)}
          />
        ))}
      </ol>
    </>
  );
}

export default ShowList;
