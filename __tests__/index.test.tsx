import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";
import dataMock from "__mocks__/dataMock.js";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home title={dataMock.title} data={dataMock.data} />);

    const heading = screen.getByRole("heading", {
      name: dataMock.title,
    });

    expect(heading).toBeInTheDocument();
  });
});
