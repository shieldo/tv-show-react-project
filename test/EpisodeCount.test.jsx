import { expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import EpisodeCount from "../src/EpisodeCount";

it("prints that it has 73 episodes", async () => {
  render(<EpisodeCount />);
  expect(screen.queryByText("Got 73 episode(s)")).toBeVisible();
});
