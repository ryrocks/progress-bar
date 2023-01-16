import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

const title = "Progress Bar Demo";
const data = {
  progressBars: [],
};

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home title={title} data={data} />);

    const heading = screen.getByRole("heading", {
      name: title,
    });

    expect(heading).toBeInTheDocument();
  });
});
