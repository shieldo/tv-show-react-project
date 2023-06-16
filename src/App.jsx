import { useEffect, useState } from "react";
import ShowFetcher from "./ShowFetcher";
import ShowList from "./ShowList";
import { getAllShows } from "./shows";

function App() {
  const [currentShowId, setShowId] = useState(null);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const shows = getAllShows().sort((a, b) => a.name.localeCompare(b.name));
    setShows(shows);
  }, []);

  return currentShowId === null ? (
    <ShowList setShowId={setShowId} shows={shows} />
  ) : (
    <ShowFetcher
      currentShowId={currentShowId}
      setShowId={setShowId}
      shows={shows}
      unsetShow={() => setShowId(null)}
    />
  );
}

export default App;
