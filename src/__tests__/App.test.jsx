import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "../routes/home/Home";

describe("Root component", () => {
  it("should render home component", () => {
    render(<Home />);

    expect(
      screen.getByRole("heading", { name: /Electronics/i })
    ).toBeInTheDocument();
  });
});
