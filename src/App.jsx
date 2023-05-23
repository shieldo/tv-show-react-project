import EpisodeView from "./EpisodeView";
import { getAllEpisodes } from "./episodes";

function App() {
  return <EpisodeView episodes={getAllEpisodes()} />;
}

export default App;
