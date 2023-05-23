import { afterEach, beforeAll, beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EpisodeView from "../src/EpisodeView";

describe("when an episode view is rendered with two Game of Thrones episodes", () => {
  beforeAll(async () => {
    render(<EpisodeView episodes={gameOfThronesEpisodes()} />);
  });

  it("renders two episode articles", async () => {
    expect(screen.getAllByRole("article")).toHaveLength(2);
  });

  describe("when the search term is set as 'winterfell'", () => {
    const search = "winterfell";
    beforeEach(async () => {
      const input = screen.getByLabelText("search-term");
      await userEvent.type(input, search);
    });

    it("renders two episode articles", async () => {
      expect(screen.queryAllByRole("article")).toHaveLength(2);
    });

    afterEach(async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText("search-term");
      input.click();
      await user.keyboard("{Backspace}".repeat(search.length));
    });
  });

  describe("when the search term is set as 'jon'", () => {
    const search = "jon";
    beforeEach(async () => {
      const input = screen.getByLabelText("search-term");
      await userEvent.type(input, search);
    });

    it("renders only one episode article", async () => {
      expect(screen.queryAllByRole("article")).toHaveLength(1);
    });

    afterEach(async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText("search-term");
      input.click();
      await user.keyboard("{Backspace}".repeat(search.length));
    });
  });

  describe("when the search term is set as 'xyzzy'", () => {
    const search = "xyzzy";
    beforeEach(async () => {
      const input = screen.getByLabelText("search-term");
      await userEvent.type(input, search);
    });

    it("renders no episode articles", async () => {
      expect(screen.queryAllByRole("article")).toHaveLength(0);
    });

    afterEach(async () => {
      const user = userEvent.setup();
      const input = screen.getByLabelText("search-term");
      input.click();
      await user.keyboard("{Backspace}".repeat(search.length));
    });
  });
});

function gameOfThronesEpisodes() {
  return [
    {
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
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/1590943",
        },
      },
    },
    {
      id: 1623964,
      url: "http://www.tvmaze.com/episodes/1623964/game-of-thrones-8x02-a-knight-of-the-seven-kingdoms",
      name: "A Knight of the Seven Kingdoms",
      season: 8,
      number: 2,
      airdate: "2019-04-21",
      airtime: "21:00",
      airstamp: "2019-04-22T01:00:00+00:00",
      runtime: 60,
      image: {
        medium:
          "http://static.tvmaze.com/uploads/images/medium_landscape/192/482451.jpg",
        original:
          "http://static.tvmaze.com/uploads/images/original_untouched/192/482451.jpg",
      },
      summary:
        "<p>Jaime faces judgement and Winterfell prepares for the battle to come.</p>",
      _links: {
        self: {
          href: "http://api.tvmaze.com/episodes/1623964",
        },
      },
    },
  ];
}
