import EpisodeCard from "../EpisodeCard";

export default {
  title: "TV Show/Episode card",
  component: EpisodeCard,
  tags: ["autodocs"],
  argTypes: {
    episode: {
      id: 1590943,
      url: "http://www.tvmaze.com/episodes/1590943/game-of-thrones-8x01-winterfell",
      name: "Winterfell",
      season: 8,
      number: 1,
      airdate: "2019-04-14",
      airtime: "21:00",
      airstamp: "2019-04-15T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/191/479477.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/191/479477.jpg",
      },
      summary:
        "<p>Arriving at Winterfell, Jon and Daenerys struggle to unite a divided North. Jon gets some big news.</p>",
    },
  },
  decorators: [
    (EpisodeCard) => (
      <div id="episodes">
        <EpisodeCard />
      </div>
    ),
  ],
};

export const Card = {
  args: {
    episode: {
      id: 1590943,
      url: "http://www.tvmaze.com/episodes/1590943/game-of-thrones-8x01-winterfell",
      name: "Winterfell",
      season: 8,
      number: 1,
      airdate: "2019-04-14",
      airtime: "21:00",
      airstamp: "2019-04-15T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/191/479477.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/191/479477.jpg",
      },
      summary:
        "<p>Arriving at Winterfell, Jon and Daenerys struggle to unite a divided North. Jon gets some big news.</p>",
    },
  },
};
